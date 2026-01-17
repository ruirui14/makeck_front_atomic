//手順詳細背景
import PropTypes from "prop-types";

/**
 * 手順詳細テキストを表示する背景
 * @param {node} children 子要素(手順詳細テキスト) 
 */
function DetailDescBase({ children }) {
  return(
    <div id='descContainer'>{children}</div>
  );
}

DetailDescBase.propTypes = {
  children : PropTypes.node,
};

export default DetailDescBase;
