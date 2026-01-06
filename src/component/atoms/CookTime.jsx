//合計料理時間表示
import PropTypes from "prop-types";

CookTime.propTypes = {
  time: PropTypes.number,     // 調理時間
};

function CookTime({ time }) {
  return(
    <div id="cookingTime">調理時間目安 : { time? time: "　-　" } 分</div>
  );
}

export default CookTime;