//レシピ名吹き出し
import PropTypes from "prop-types";

RecipeNameBubble.propTypes = {
  className: PropTypes.string,
  bgImage: PropTypes.string,
  recipeName: PropTypes.string
}

/**
 * 
 * @param {string} className  スタイル判別用クラス名
 * @param {string} bgImage    背景画像url
 * @param {string} recipeName 料理名(バブル内表示ラベル) 
 * @returns 
 */
function RecipeNameBubble({ className, bgImage, recipeName }) {
  return(
    <div 
      id="speechBubble" className={className}
      style={{
        backgroundImage: `url(${bgImage})`,
        display: "none"
      }}
    >
      <div id="bubbleText">{recipeName}</div>
    </div>
  );
}

export default RecipeNameBubble;