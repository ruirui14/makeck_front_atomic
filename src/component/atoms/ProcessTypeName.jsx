//ガントチャート料理プロセス名
import PropTypes from "prop-types";

/**
 * 調理手順ガイドの手順名表示
 * @param {string} typeName 手順タイプ名(下準備・調理・仕上げ)
 */
function ProcessTypeName({ typeName }) {
  return(
    <div>{typeName}</div>
  );
}

ProcessTypeName.propTypes = {
  typeName: PropTypes.string,
}

export default ProcessTypeName;