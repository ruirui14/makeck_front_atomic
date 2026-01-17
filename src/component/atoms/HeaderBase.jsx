//ヘッダーの背景
import PropTypes from "prop-types";

/**
 * ヘッダー背景
 * @param {node} children ヘッダー内要素(戻るアイコン、ページタイトル)
 */
function HeaderBase({ children }) {
  return(
    <header>{children}</header>
  );
}

HeaderBase.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderBase;