//レシピカードの料理名
import PropTypes from "prop-types";

RecipeName.propTypes = {
  menuName: PropTypes.string
}

function RecipeName({menuName}) {
  return(
    <div className="menuName">{menuName}</div>
  );
}

export default RecipeName;
