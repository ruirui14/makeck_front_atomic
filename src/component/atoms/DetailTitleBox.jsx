//手順詳細画面 料理タイトルの囲い
import PropTypes from "prop-types";

/**
 * 手順詳細画面の画面見出し
 * @param {node}    children    子要素(手順番号)
 * @param {string}  recipeName  料理名
 */
function DetailTitleBox({children, recipeName}) {
  return(
    <div id="stepTitle">
      {children}
      <div id="stepName">{recipeName}</div>  
    </div>
  );
}

DetailTitleBox.propTypes = {
  children: PropTypes.node,
  recipeName: PropTypes.string,
};

export default DetailTitleBox;