//手順詳細画面 料理タイトルの囲い
import PropTypes from "prop-types";

DetailTitleBox.propTypes = {
  children: PropTypes.node,
  recipeName: PropTypes.string,
};

function DetailTitleBox({children, recipeName}) {
  return(
    <div id="stepTitle">
      {children}
      <div id="stepName">{recipeName}</div>  
    </div>
  );
}

export default DetailTitleBox;