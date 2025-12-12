//ボタンの背景
import "../styles/ButtonBase.css";
import PropTypes from "prop-types";

function ButtonBase({ onClick, id, children }) {
  return (
    <button type="button" id={id} onClick={onClick}>
      {children}
      <p className="arrow">＞</p>
    </button>
  );
}

ButtonBase.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonBase;
