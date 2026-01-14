//手順詳細画面の手順番号
import PropTypes from "prop-types";

DetailNumber.propTypes = {
  num: PropTypes.string
}

function DetailNumber({ num }) {
  return(
    <div id="stepNumber">{num}</div>
  );
}

export default DetailNumber;