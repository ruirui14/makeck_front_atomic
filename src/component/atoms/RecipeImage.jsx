//レシピ画像
import PropTypes from "prop-types";

/**
 * 
 * @param {string}  image   画像パス
 * @param {string}  page    呼び出し元ページ
 * @param {func}    onclick 押下時処理
 */
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

RecipeImage.propTypes = {
  image: PropTypes.string,
  page: PropTypes.string,
  onclick: PropTypes.func
}

export default RecipeImage;