//４方向の矢印アイコン
import PropTypes from "prop-types";
import images from "../../hooks/images";
function ArrowIcon({ direction = "right", alt = "矢印", className, onClick }) {
  const arrowMap = {
    right: images.rightArrow,
    left: images.backBtn,
    top: images.closeButton,
    down: images.openButton,
  };
  return <img className={className} src={arrowMap[direction]} onClick={onClick} alt={alt} />;
}

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(["right", "left", "top", "down"]),
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};


export default ArrowIcon;
