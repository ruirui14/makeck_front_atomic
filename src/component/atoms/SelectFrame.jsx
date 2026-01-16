//ダイアログ内 料理選択フレーム
import PropTypes from "prop-types";
import images from "../../hooks/images";

function SelectFrame({ type, alt, className, width, height }) {
  const selectMap = {
    StapleFood: images.selectStapleFood,
    MainDish: images.selectMainDish,
    SideDish: images.selectSideDish,
    Soup: images.selectSoup,
  };
  return (
    <img src={selectMap[type]} alt={alt} className={className} width={width} height={height}/>
  );
}

SelectFrame.propTypes = {
  type: PropTypes.oneOf(["StapleFood", "MainDish", "SideDish", "Soup"]),
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default SelectFrame;