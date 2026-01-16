//ボタン内テキスト
import PropTypes from "prop-types";

function ButtonLabel({ text, margin, className }) {
  return (
    <p className={className} style={{ margin }}>
      {text}
    </p>
  );
}

ButtonLabel.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  margin: PropTypes.string,
};

export default ButtonLabel;
