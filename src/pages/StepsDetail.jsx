import { useNavigate, useParams } from 'react-router-dom';
import useMenuData from '../hooks/useMenuData';         // チャート用データ取得
import DetailDescBase from '../component/atoms/DetailDescBase';
import DetailDescText from '../component/atoms/DetailDescText';
import ArrowIcon from "../component/atoms/ArrowIcon";
import images from "../hooks/images";

// ハリボテデータ
var _haribote = [{
    "recipeName": "フランクフルトのソテー",
    "displayName": "調理2",
    "materials": [
        {
            "name": "フランクフルト",
            "quantity": "200g"
        },
        {
            "name": "オリーブオイル",
            "quantity": "大さじ2"
        },
        {
            "name": "塩",
            "quantity": "少々"
        },
        {
            "name": "黒こしょう",
            "quantity": "少々"
        }
    ],
    "description": "フライパンにオリーブオイルを熱し、フランクフルトを入れて焼き色がつくまで炒め、塩と黒こしょうで味を調えます。"
}]

function StepsDetail() {
    // テスト用データ受取
    var details = {
        "displayName" : localStorage.getItem("displayName"),
        "recipieName" : localStorage.getItem("recipieName")
    }

    // 手順ID受取
    const { id } = useParams();
    console.log("id : ", id);
    
    // 画面遷移用フック
    const navigate = useNavigate();
    
    // ページ名
    const title = "手順詳細";

    // 手順番号
    const _stepNumber = 2;
    // 手順名
    const _menuName = "フランクフルトのソテー";

    // 詳細データ取得
    const { data, _loading, _error } = useMenuData(
    `https://dev-makeck.mattuu.com/recipe/${id}`
    );    
    const _detail = data;
    return (
      <div className="App">
        <header>
          <ArrowIcon direction="left" className="backBtn" onClick={() => navigate("/CookProcess")} />
          <div id="pageTitle">{title}</div>
        </header>

        <main>
          {/* 調理手順番号、料理名 */}
          <div id="stepTitle">
            <div id="stepNumber">{details?.displayName}</div>
            <div id="stepName">{details?.recipieName}</div>
          </div>

          {/* 材料一覧 */}
          <div id="materialsContainer">
            <div className="caption">
              <div className="captionText">使用する材料</div>
              <div className="captionBorder"></div>
            </div>
            <div className="materialList">
              {data?.materials.map((material, index) => {
                console.log("material : ", material);
                return (
                  <div className="material" key={index}>
                    <div className="materialName">{material.name}</div>
                    <div className="quantity">{material.quantity}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 調理方法 */}
          <div id="methodContainer">
            <div className="caption">
              <div className="captionText">調理方法</div>
              <div className="captionBorder"></div>
            </div>
            <DetailDescBase>
              <DetailDescText desc={data?.description} />
            </DetailDescBase>
          </div>
        </main>
      </div>
    );
}

export default StepsDetail;