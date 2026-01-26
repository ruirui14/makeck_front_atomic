import { useParams } from 'react-router-dom';
import useMenuData from '../hooks/useMenuData';         // チャート用データ取得
import DetailDescCard from "../component/molecules/DetailDescCard";
import HeadingLine from "../component/atoms/HeadingLine";
import DetailTitleBox from '../component/atoms/DetailTitleBox';
import DetailNumber from '../component/atoms/DetailNumber';
import SectionLine from "../component/atoms/SectionLine";
import MaterialItem from "../component/atoms/MaterialItem";
import HeaderSection from '../component/organisms/HeaderSection';


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
      "recipeName" : localStorage.getItem("recipieName")
    }


    // 手順ID受取
    const { id } = useParams();
    console.log("id : ", id);
    
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
        <HeaderSection title={title} />

        <main>
          {/* 調理手順番号、料理名 */}
          {/* <div id="stepTitle">
            <div id="stepNumber">{details?.displayName}</div>
            <div id="stepName">{details?.recipeName}</div>
          </div> */}
          <DetailTitleBox recipeName={details.recipeName} >
            <DetailNumber num={details.displayName}/>
          </DetailTitleBox>
          {/* 材料一覧 */}
          <div id="materialsContainer">
            <div className="caption">
              <div className="captionText">使用する材料</div>
              <HeadingLine className="captionBorder" />
            </div>
            <div className="materialList">
              {data?.materials.map((material, index) => {
                console.log("material : ", material);
                return (
                  <SectionLine className="material" key={index}>
                    <MaterialItem
                      nameClassName="materialNameP"
                      quantityClassName="quantity"
                      name={material.name}
                      quantity={material.quantity}
                    />
                    {/* <div className="materialName">{material.name}</div>
                    <div className="quantity">{material.quantity}</div> */}
                  </SectionLine>
                );
              })}
            </div>
          </div>

          {/* 調理方法 */}
          <div id="methodContainer">
            <div className="caption">
              <div className="captionText">調理方法</div>
              <HeadingLine className="captionBorder" />
            </div>
            <DetailDescCard desc={data?.description}/>
          </div>
        </main>
      </div>
    );
}

export default StepsDetail;