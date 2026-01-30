import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import useMenuData from "../hooks/useMenuData";
import RecipeSelectionTemp from "../component/templates/RecipeSelectionTemp";

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
      localStorage.getItem("select_image") || "[]",
    );

    while (selectImages.length < 4) selectImages.push(""); // 空文字で埋める
    selectImages[now_state] = image || ""; // 選択中のカテゴリ
    localstroage.setItem("select_image", JSON.stringify(selectImages));
  };

  // ヘッダーの名前変更
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

  const localkey = "header_state";

  const localstroage = window.localStorage;

  let now_state = parseInt(localstroage.getItem(localkey) || "0", 10);

  if (!now_state) {
    // header の状態がないとき
    localstroage.setItem(localkey, 0);
    now_state = 0;
  }

  // 選択状態のstatekey
  const select_state = "select_key";

  const [selectedCategory, _setSelectedCategory] = useState(
    headerNames[now_state],
  ); // 初期状態として主食を設定

  const handleClick = (index) => {
    console.log("押されたよ");
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
  var { data } = useMenuData(
    `https://makeck.mattuu.com/recipe/search_category`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: headerNames[now_state].name,
      }),
    },
  );
  
  console.log("APIレスポンス内容 >>>", data);
  var menus = data?.result ?? [];
  console.log(menus);

  return (
    <RecipeSelectionTemp
      title={selectedCategory.name}
      menus={menus}
      selectedId={selectsData[now_state]}
      isDialogOpen={testDialogOpen}
      selectedRecipes={selectsData}
      onCategorySelect={handleClick}
      onRecipeSelect={selectRecipeIdChanger}
      onDialogClose={() => setTestDialogOpen(false)}
      onDialogClick={buttonClickHome}
      onFooterClick={() => navigate("/menuConfirmation")}
    />
  );
}
