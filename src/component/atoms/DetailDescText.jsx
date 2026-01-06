//手順詳細テキスト
import PropTypes from "prop-types";

DetailDescText.propTypes = {
  desc: PropTypes.string
}

function DetailDescText({ desc }) {
  return(
    <div className='paragraph'>{desc}</div>
  );
}

export default DetailDescText;