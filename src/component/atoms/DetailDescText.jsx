//手順詳細テキスト
import PropTypes from "prop-types";

/**
 * 手順詳細の説明テキスト
 * @param {string} desc 手順詳細説明テキスト 
 */
function DetailDescText({ desc }) {
  return(
    <div className='paragraph'>{desc}</div>
  );
}

DetailDescText.propTypes = {
  desc: PropTypes.string
}

export default DetailDescText;