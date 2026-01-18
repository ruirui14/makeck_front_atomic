import { useNavigate } from "react-router-dom";
import React from "react";
import images from "../hooks/images";
import { useState } from "react";
import TestDialog from "./TestDialog";
import useMenuData from "../hooks/useMenuData";
import FooterSection from "../component/organisms/FooterSection";
import HeaderSection from "../component/organisms/HeaderSection";
import SelectRecipieSection from "../component/organisms/SelectRecipieSection";
import SelectDialogSection from "../component/organisms/SelectDialogSection";

// import Swal from "sweetalert2";

export default function RecipeSelection() {
  const navigate = useNavigate(); //遷移のやつだよ

  // カスタムダイアログ表示、非表示管理
  const [testDialogOpen, setTestDialogOpen] = useState(false);

  const [selectsData, setSelects] = useState(["", "", "", ""]);

  // ダイアログ表示ボタンクリック処理
  const buttonClickHome = () => {
    setTestDialogOpen(true);
  };

  //選択中
  const selectRecipeIdChanger = (cardid, image) => {
    console.log(cardid, image);

    // 選択中の状態を設定
    const updatedSelectsData = [...selectsData];
    updatedSelectsData[now_state] = String(cardid);
    setSelects(updatedSelectsData);

    // localstorage に保存
    localstroage.setItem(select_state, JSON.stringify(updatedSelectsData));

    const selectImages = JSON.parse(
      localStorage.getItem("select_image") || "[]"
    );

    while (selectImages.length < 4) selectImages.push(""); // 空文字で埋める
    selectImages[now_state] = image || ""; // 選択中のカテゴリ
    localstroage.setItem("select_image", JSON.stringify(selectImages));
  };

  {
    /*ヘッダーの名前変更*/
  }
  const headerNames = [
    {
      id: 1,
      name: "主食",
      apipath: "/syusyoku",
    },
    {
      id: 2,
      name: "主菜",
      apipath: "/syusai",
    },
    {
      id: 3,
      name: "副菜",
      apipath: "/fukusai",
    },
    {
      id: 4,
      name: "汁物",
      apipath: "/sirumono",
    },
  ];

  // 仮のメニューデータ
  // const menuRecipe = [
  //   {
  //     id: "5kbhajx",
  //     image: images.FriedChicken,
  //     name: "田舎風鶏のからあげ",
  //   },
  //   {
  //     id: "a2spoij",
  //     image: images.MeatPotatoes,
  //     name: "変わり肉じゃが",
  //   },
  //   {
  //     id: "ni8ttzn",
  //     image: images.squidRisotto,
  //     name: "イカのリゾット",
  //   },
  //   {
  //     id: "k48tdze",
  //     image: images.frankfurtSaute,
  //     name: "フランクフルトのソテー",
  //   },
  //   {
  //     id: "jf78btv",
  //     image: images.coconutMilkJelly,
  //     name: "ココナッツミルクのゼリー",
  //   },
  //   {
  //     id: "wyfyi3i",
  //     image: images.asuparaSoup,
  //     name: "アスパラガスのスープ",
  //   },
  //   {
  //     id: "4yja48v",
  //     image: images.brownSeaweedSoup,
  //     name: "ワカメスープ",
  //   },
  // ];

  const localkey = "header_state";

  const localstroage = window.localStorage;

  let now_state = parseInt(localstroage.getItem(localkey) || "0", 10);

  if (!now_state) {
    // header の状態がないとき
    localstroage.setItem(localkey, 0);
    now_state = 0;
  }

  // 選択状態のｓstatekey
  const select_state = "select_key";

  const [selectedCategory, _setSelectedCategory] = useState(
    headerNames[now_state]
  ); // 初期状態として主食を設定

  const handleClick = (index) => {
    console.log("押されたよ");
    // localstroage.setItem(localkey,(Number(now_state) + 1) % 4);
    localstroage.setItem(localkey, index);
    // setSelectedCategory(headerNames[2]);  // 画像が押された時にheaderNames[3]を選択
    window.location.reload();
  };

  const _handleCard = (cardid) => {
    console.log(cardid);
    selectsData[now_state] = String(cardid);

    // localstorage に保存
    localstroage.setItem(select_state, JSON.stringify(selectsData));
  };

  const [initloading, setInitLoading] = useState(true);

  React.useEffect(() => {
    // すでに初期化されていたら処理を抜ける
    if (!initloading) {
      return;
    }

    // 現在の選択状態を取得
    const now_selected = localStorage.getItem(select_state);

    // 存在する時
    if (now_selected) {
      setSelects(JSON.parse(now_selected));
    }
    // 初期化済みのフラグを立てる
    setInitLoading(false);
  }, [initloading]);

  // メニューデータ取得
  //主食
  var { data, _loading, _error } = useMenuData(
    // `https://makeck.mattuu.com/api/${headerNames[now_state]["apipath"]}`
    `https://makeck.mattuu.com/recipe/search_category`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: headerNames[now_state].name,
      }),
    }
  );
  // var menus = data ? data : [];
  console.log("APIレスポンス内容 >>>", data);
  var menus = data?.result ?? [];
  console.log(menus);

  return (
    <div className="App">
      {/*ヘッダー*/}
      <HeaderSection title={selectedCategory.name} />

      <main>
        {/*検索フォーム*/}
        <div className="Form">
          <form>
            <input
              className="FormDesign"
              type="text"
              data-search="search"
              placeholder="キーワード検索"
            />
          </form>
        </div>

        {/*レシピ選択エリア*/}
        <SelectRecipieSection
          menus={menus}
          selectedId={selectsData[now_state]}
          onCategorySelect={handleClick}
          onRecipeSelect={selectRecipeIdChanger}
        />

        {/*レシピ選択中モーダル*/}
        <div>
          {/* <TestDialog
            isOpen={testDialogOpen}
            test_content={selectsData}
            onConfirm={() => {
              setTestDialogOpen(false);
              console.log("okが押されました");
            }}
            onCancel={() => {
              setTestDialogOpen(false);
              console.log("キャンセルが押されました");
            }}
          /> */}

          <SelectDialogSection
            open={testDialogOpen}
            recipes={selectsData}
            onClose={() => setTestDialogOpen(false)}
          />

          <button className="DialogButton" onClick={buttonClickHome}>
            <img src={images.selectMenu} alt="ボタン画像" />
          </button>
        </div>
      </main>

      {/*フッター*/}
      <FooterSection
        label="献立決定"
        onClick={() => navigate("/menuConfirmation")}
      />
    </div>
  );
}
