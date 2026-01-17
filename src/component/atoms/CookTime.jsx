//合計料理時間表示
import PropTypes from "prop-types";

/**
 * 調理時間を表示する
 * @param {number} time 合計調理時間
 */
function CookTime({ time }) {
  return(
    <div id="cookingTime">調理時間目安 : { time? time: "　-　" } 分</div>
  );
}

CookTime.propTypes = {
  time: PropTypes.number,     // 調理時間
};

export default CookTime;