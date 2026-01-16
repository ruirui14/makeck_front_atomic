//ヘッダーの背景
import PropTypes from "prop-types";

HeaderBase.propTypes = {
  children: PropTypes.node.isRequired
}

function HeaderBase({ children }) {
  return(
    <header>{children}</header>
  );
}

export default HeaderBase;