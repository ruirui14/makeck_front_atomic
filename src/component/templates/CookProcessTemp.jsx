import PropTypes from "prop-types";
import HeaderSection from "../organisms/HeaderSection";
import CookTime from "../atoms/CookTime";
import ProcessOverviewSection from "../organisms/ProcessOverviewSection";
import ProcessChartSection from "../organisms/ProcessChartSection";
import FooterSection from "../organisms/FooterSection";

//
/**
 * 4品分のガントチャート画面テンプレート生成
 * @param {bool}    loading       画面ロード中か否か
 * @param {object}  error         エラー情報 
 * @param {object}  chartData     ガントチャート生成用データ
 * @param {object}  dialogRef     ダイアログ管理
 * @param {func}    onDialogClick ダイアログ押下時イベント
 * @param {func}    onFooterClick フッターボタン押下時イベント
 * @returns CookProcess画面のテンプレート
 */
function CookProcessTemp({
  loading,
  error,
  chartData,
  onFooterClick,
  dialogRef,
  onDialogClick
}) {
  // ローディング中
  if (loading) {
    return(
      <div className="App noScroll">
        <HeaderSection title="調理手順" />
      </div>
    );
  }
  // エラー発生時
  else if (error) {
    return(
      <div className='App noScroll'>
        <HeaderSection title="調理手順" />

        <main>
          <h2 id='message'>メニューデータの取得中に</h2>
          <h2 id='message'>エラーが発生しました</h2>
        </main>
      </div>
    )
  }
  // 正常時
  else {
    return(
      <div className="App noScroll">
        <HeaderSection title="調理手順" />                    {/* ヘッダー */}

        <main>
          <CookTime time={chartData?.totalTime} />          {/* 調理時間 */}
          <ProcessOverviewSection menu={chartData?.menu} /> {/* 手順カテゴリ説明+料理画像 */}
          <ProcessChartSection chartData={chartData} />     {/* レシピガントチャート */}

          {/* 調理完了ダイアログ */}
          <dialog id="cookFinDialog" ref={dialogRef} onClick={onDialogClick} >
            <div id="dialogContainer">
              <div id="dialogLine">     
                <div id="dialogTitle">調理完了</div>
                <div id="dialogText">お疲れさまでした！</div>
              </div>
            </div>
            <div id="closeText">タップで閉じる</div>
          </dialog>
        </main>

        <FooterSection label="調理完了" onClick={onFooterClick} />
      </div>
    )
  }
}

CookProcessTemp.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  chartData: PropTypes.object,
  dialogRef: PropTypes.object,
  onDialogClick: PropTypes.func,
  onFooterClick: PropTypes.func
}
export default CookProcessTemp;
