//確認画面の主食・主菜・副菜・汁物テキスト
import PropTypes from "prop-types";

RecipeCategoryName.propTypes = {
  category: PropTypes.string
}

function RecipeCategoryName({ category }) {
  return(
    <div className="category">{category}</div>
  );
}

export default RecipeCategoryName;