//確認画面の主食・主菜・副菜・汁物テキスト
import PropTypes from "prop-types";

/**
 * レシピのカテゴリ名ラベル
 * @param {string} category レシピのカテゴリ名(主食・主菜・副菜・汁物)
 */
function RecipeCategoryName({ category }) {
  return(
    <div className="category">{category}</div>
  );
}

RecipeCategoryName.propTypes = {
  category: PropTypes.string
}

export default RecipeCategoryName;