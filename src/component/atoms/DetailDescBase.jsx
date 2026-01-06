//手順詳細背景
import PropTypes from "prop-types";

DetailDescBase.propTypes = {
  children : PropTypes.node,    // 詳細説明テキストコンポーネント
};


function DetailDescBase({ children }) {
  return(
    <div id='descContainer'>{children}</div>
  );
}

export default DetailDescBase;
