import { useNavigate } from "react-router-dom";
import _React from 'react';
import images from '../hooks/images';
import { useState } from "react";
import useMenuData from "../hooks/useMenuData";
import CookTime from "../component/atoms/CookTime";
import ButtonBase from "../component/atoms/ButtonBase";
import ArrowIcon from "../component/atoms/ArrowIcon";
import HeadingLine from "../component/atoms/HeadingLine";
import SectionLine from "../component/atoms/SectionLine";
import MaterialItem from "../component/atoms/MaterialItem";

export default function MaterialList() {
  console.log("選択中のレシピIDリスト:");
  var recipe_ids = JSON.parse(localStorage.getItem("select_key"));
  console.log(recipe_ids);

  const navigate = useNavigate();   //遷移のやつだよ

  const [selected, setSelected] = useState(null);     //アコーディオンリスト用


  const toggle = (i) => {
    if (selected === i) {   //クリックされたアイテムがすでに選択されていたらselected(null)返す
        return setSelected(null)
    }
    setSelected(i)  //クリックされたアイテムを選択状態にする
  }


  // サンプルデータ
  // const datas = [
  //     {
  //         materialname: "フランクフルトのソテー",
  //         answer:
  //             [
  //                 "フランクフルト",
  //                 "ブロッコリー",
  //                 "ニンニク",
  //                 "赤唐辛子",
  //                 "オリーブ油(サラダ油)",
  //                 "塩、故障",
  //             ],
  //         number:
  //             [
  //                 "4",
  //                 "420",
  //                 "1",
  //                 "1",
  //                 "2",
  //                 "1"
  //             ],
  //         unit:
  //             [
  //                 "本",
  //                 "g",
  //                 "かけ",
  //                 "本",
  //                 "大匙",
  //                 "つまみ"
  //             ],

  //     },
  //     {
  //         materialname: "イカのリゾット",
  //         answer:
  //             [
  //                 "イカ",
  //                 "ご飯",
  //                 "タマネギ",
  //                 "白ワイン",
  //                 "オリーブオイル",
  //                 "塩",
  //                 "バター"
  //             ],
  //         number:
  //             [
  //                 "140",
  //                 "1",
  //                 "80",
  //                 "1/3",
  //                 "1",
  //                 "1",
  //                 "30"
  //             ],
  //         unit:
  //             [
  //                 "g",
  //                 "カップ",
  //                 "g",
  //                 "カップ",
  //                 "大匙",
  //                 "つまみ",
  //                 "g"

  //             ]
  //     },
  //     {
  //         materialname: "ココナッツミルクゼリー",
  //         answer:
  //             [
  //                 "ココナッツミルク",
  //                 "牛乳",
  //                 "砂糖",
  //                 "粉ゼラチン"
  //             ],

  //         number:
  //             [
  //                 "200",
  //                 "50",
  //                 "2",
  //                 "4"
  //             ],
  //         unit:
  //             [
  //                 "ml",
  //                 "ml",
  //                 "大匙",
  //                 "g"

  //             ]
  //     },
  //     {
  //         materialname: "わかめスープ",
  //         answer:
  //             [
  //                 "乾燥わかめ",
  //                 "だし汁",
  //                 "胡椒",
  //                 "ごま油",
  //                 "しょうゆ"
  //             ],
  //         number:
  //             [
  //                 "3",
  //                 "300",
  //                 "1",
  //                 "1",
  //                 "1"
  //             ],
  //         unit:
  //             [
  //                 "g",
  //                 "ml",
  //                 "つまみ",
  //                 "小匙",
  //                 "小匙"

  //             ]
  //     },
  // ]

    //材料JSON取得
    var { data, _loading, _error } = useMenuData(
      `https://dev-makeck.mattuu.com//chart/sermaterials`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "recipe_ids": recipe_ids
        }),
      }
    )
    var material = data ? data : [];
    console.log("取得した材料データ:");
    console.log(material);

    return (
      <div className="App">
        {/*ヘッダー*/}
        <header>
          <ArrowIcon
            direction="left"
            className="backBtn"
            onClick={() => navigate("/menuConfirmation")}
          />
          <div id="pageTitle">材料一覧</div>
        </header>

        <main>
          <CookTime time={""} />

          <div className="wrapper">
            <div className="accordion">
              {material.map((item, i) => (
                <div className="item" key={i}>
                  {" "}
                  {/*パフォーマンス向上のためらしい*/}
                  {/* {console.log("インデックス番号:", i, "要素:", item)} */}
                  <HeadingLine className="title" onClick={() => toggle(i)}>
                    {/*料理名*/}
                    <div className="materialname">{item.name}</div>

                    {/* 表示、非表示を切り替えるボタン */}
                    <span>
                      {selected === i ? (
                        <ArrowIcon direction="top" />
                      ) : (
                        <ArrowIcon direction="down" />
                      )}
                    </span>
                  </HeadingLine>
                  <div className={selected === i ? "content show" : "content"}>
                    {item.materials.map((line, index) => (
                      <SectionLine className="material" key={index}>
                        <MaterialItem
                          nameClassName="materialNameP"
                          quantityClassName="quantityM"
                          name={line.name}
                          quantity={line.quantity}
                          unit={line.unit}
                        />
                      </SectionLine>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/*フッター*/}
        <footer id="decisionFooter">
          <ButtonBase
            type="button"
            id="decisionBtn"
            onClick={() => navigate("/cookProcess")}
          >
            調理開始！
          </ButtonBase>
        </footer>
      </div>
    );

}