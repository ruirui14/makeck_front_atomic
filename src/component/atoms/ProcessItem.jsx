//ガントチャートのブロック
import PropTypes from "prop-types";

/**
 * ガントチャート内要素
 * @param {string}  key
 * @param {string}  className  表示区分(手順 手順タイプ | 空き時間)
 * @param {string}  taskName   手順名
 * @param {number}  time       持ち時間
 * @param {func}    onClick    押下時イベント
 * @returns 手順ボックス または 空き時間の縦線
 */
function ProcessItem({ key, className, taskName, time, onClick }) {
  return(
    <div
      key={key}
      className={`gridItem ${className}`}
      style={{height: `${time? time * 100 : 2}%`}}
      onClick={onClick}
    >{taskName}</div>
  );
}

ProcessItem.propTypes = {
  key: PropTypes.string,
  className: PropTypes.string,
  taskName: PropTypes.string,
  time: PropTypes.number,
  onClick: PropTypes.func,
}

export default ProcessItem;
