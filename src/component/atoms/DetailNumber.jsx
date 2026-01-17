//手順詳細画面の手順番号
import PropTypes from "prop-types";

/**
 * 詳細画面における手順番号
 * @param {string} num  手順番号 
 */
function DetailNumber({ num }) {
  return(
    <div id="stepNumber">{num}</div>
  );
}

DetailNumber.propTypes = {
  num: PropTypes.string
}

export default DetailNumber;