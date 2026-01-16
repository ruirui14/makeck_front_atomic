//フッターの背景
import PropTypes from "prop-types";

FooterBase.propTypes = {
  children: PropTypes.node.isRequired
}

/**
 * フッター背景
 * @param {node} children  子要素(フッター内ボタン)
 * @returns フッター背景
 */
function FooterBase({children}) {
  return(
    <footer id="decisionFooter">{children}</footer>
  );
}

export default FooterBase;
