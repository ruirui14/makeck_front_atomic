//４方向の矢印アイコン
import PropTypes from "prop-types";
import images from "../../hooks/images";
import { useLocation } from "react-router-dom";
function ArrowIcon({ direction = "right", alt = "矢印", className, onClick }) {
  const arrowMap = {
    right: images.rightArrow,
    left: images.backBtn,
    top: images.closeButton,
    down: images.openButton,
  };

  const locatioin = useLocation();
  const isDetail = locatioin.pathname.includes("Detail");
  return <img className={className} src={isDetail? `.${arrowMap[direction]}` : arrowMap[direction]} onClick={onClick} alt={alt} />;
}

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(["right", "left", "top", "down"]),
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};


export default ArrowIcon;
