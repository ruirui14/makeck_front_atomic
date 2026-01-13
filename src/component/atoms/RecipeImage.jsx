//レシピ画像
import PropTypes from "prop-types";

RecipeImage.propTypes = {
  image: PropTypes.string,                    // 料理画像パス
  page: PropTypes.string,                     // 使用ページ
  onclick: PropTypes.func,                    // クリック時処理(必須ではない)
}

function RecipeImage({ image, page, onclick }) {
  // スタイル設定(使用ページ: クラス名)
  const className = {
    "RecipeSelection": "menuImageR",
    "MenuConfirmation": "menuImage", 
    "CookProcess": "gridItem"
  };
  
  return(
    <img
      src={image}
      alt="RecipeImage"
      className={className[page]}
      onClick={onclick? onclick : undefined}
    />
  );
}

export default RecipeImage;