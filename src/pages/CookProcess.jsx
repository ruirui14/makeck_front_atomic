// 各種インポート
import { useNavigate } from "react-router-dom"; // 画面遷移
import "regenerator-runtime";

import images from "../hooks/images"; // 画像取得

import useMenuData from "../hooks/useMenuData"; // チャート用データ取得
import useCreateChart from "../hooks/useCreateChart"; // チャート用データ整形
import { useRef } from "react";
import CookTime from "../component/atoms/CookTime";
import PageTitle from "../component/atoms/PageTitle";
import ArrowIcon from "../component/atoms/ArrowIcon";
import HeaderBase from "../component/atoms/HeaderBase";
import ProcessChartSection from "../component/organisms/ProcessChartSection";
import ProcessOverviewSection from "../component/organisms/ProcessOverviewSection";
import FooterSection from "../component/organisms/FooterSection";



function CookProcess() {
  var recipe_ids = JSON.parse(localStorage.getItem("select_key"));
  const navigate = useNavigate(); // 遷移用インスタンス
  const dialogRef = useRef(null); // ダイアログ描画
  

  // メニューデータ取得 (4品分献立、カテゴリー*3)
  const { data, loading, error } = useMenuData(
    "https://dev-makeck.mattuu.com/chart/genchart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipe_ids: recipe_ids,
      }),
    }
  );
  
  const menus = data ? data : "";
  console.log(`menus : \n`, menus);

  // チャート用データ整形
  const { chart, chartError } = useCreateChart(menus ? menus : null);
  var chartData = chart ? chart : null;
  console.log(chartData);

  // 次のページ
  const nextPage = {
    title: "調理完了",
    path: "/",
  };

  // 読み込み時
  if (loading) {
      return (
          <div className='App noScroll'>
              <HeaderBase>
                  {/* 戻るボタン */}
                  <img
                    src={images.backBtn}
                    alt="戻るアイコン"
                    className="backBtn"
                    onClick={() => navigate('/MaterialList')} />
                  <div id='pageTitle'>調理手順</div>
              </HeaderBase>
          </div>
      )
  }
  // エラー発生時
  if (error || chartError) {
    // エラーメッセージ取得
    console.log("エラー発生");
    console.log(error ? error : chartError)
    return (
        <div className='App noScroll'>
            <HeaderBase>
                {/* 戻るボタン */}
                <img
                  src={images.backBtn}
                  alt="戻るアイコン"
                  className="backBtn"
                  onClick={() => navigate('/MaterialList')} 
                />
                <div id='pageTitle'>調理手順</div>
            </HeaderBase>
            <main>
              <h2 id='message'>メニューデータの取得中に</h2>
              <h2 id='message'>エラーが発生しました</h2>
            </main>
        </div>
    )
  }else{
    // 正常時
    return (
      <div className="App noScroll">
        <HeaderBase>
          {/* 戻るボタン */}
          <ArrowIcon
            direction="left"
            className="backBtn"
            onClick={() => navigate("/MaterialList")}
          />
          <PageTitle id={"pageTitle"} pageName={"調理手順"}></PageTitle>
        </HeaderBase>

        <main>
          <CookTime time={chartData?.totalTime} />
          <ProcessOverviewSection menu={chartData?.menu} />

          {/* ガントチャートコンテナ */}
          <ProcessChartSection chartData={chartData} />

          {/* 調理完了ダイアログ */}
          <dialog
            id="cookFinDialog"
            ref={dialogRef}
            onClick={() => {
              navigate(nextPage.path);
              localStorage.clear();
            }}
          >
            <div id="dialogContainer">
              <div id="dialogLine">     
                <div id="dialogTitle">調理完了</div>
                <div id="dialogText">お疲れさまでした！</div>
              </div>
            </div>
            <div id="closeText">タップで閉じる</div>
          </dialog>
        </main>

        <FooterSection label="調理完了" onClick={() => dialogRef.current.showModal()} />
        
      </div>
    );
  }
}

export default CookProcess;
