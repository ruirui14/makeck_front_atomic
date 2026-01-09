//ボタンの背景
import "../styles/ButtonBase.css";
import PropTypes from "prop-types";

function ButtonBase({ onClick, id, className, children }) {
  return (
    <button type="button" id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );

}

ButtonBase.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  className:PropTypes.string
};

export default ButtonBase;
