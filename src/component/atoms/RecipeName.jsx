//レシピカードの料理名
import PropTypes from "prop-types";

/**
 * 料理名ラベル
 * @param {string} menuName 料理名
 */
function RecipeName({menuName}) {
  return(
    <div className="menuName">{menuName}</div>
  );
}

RecipeName.propTypes = {
  menuName: PropTypes.string
}

export default RecipeName;
