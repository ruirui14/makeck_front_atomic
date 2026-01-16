//ガントチャート料理プロセス名(下準備・調理・仕上げ)
import PropTypes from "prop-types";

ProcessTypeName.propTypes = {
  typeName: PropTypes.string,
}

function ProcessTypeName({ typeName }) {
  return(
    <div>{typeName}</div>
  );
}

export default ProcessTypeName;