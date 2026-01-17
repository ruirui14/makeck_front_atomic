//ガントチャート プロセス識別用カラーボックス
import PropTypes from "prop-types";

/**
 * 手順タイプ色見本
 * @param {string} color  タイプ判別色(下準備: yellow, 調理: red, 仕上げ: green) 
 * @returns 手順タイプ区分の色見本用ボックス
 */
function TypeColor({ color }) {
  return(
    <div id={color} className="colorBox" />
  );
}

TypeColor.propTypes = {
  color: PropTypes.string
}

export default TypeColor;
