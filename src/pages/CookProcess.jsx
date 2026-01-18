// 各種インポート
import { useNavigate } from "react-router-dom"; // 画面遷移
import "regenerator-runtime";

import useMenuData from "../hooks/useMenuData"; // チャート用データ取得
import useCreateChart from "../hooks/useCreateChart"; // チャート用データ整形
import { useRef } from "react";
import CookProcessTemp from "../component/templates/CookProcessTemp";

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
  const { chart } = useCreateChart(menus ? menus : null);
  var chartData = chart ? chart : null;
  console.log(chartData);

  return(
    <CookProcessTemp
      loading={loading} error={error} chartData={chartData} dialogRef={dialogRef}
      onFooterClick={() => dialogRef.current.showModal()}
      onDialogClick={() => {
        navigate("/");
        localStorage.clear();
      }}
    />
  )
}

export default CookProcess;
