import PropTypes from "prop-types";
import DetailDescBase from "../atoms/DetailDescBase";
import DetailDescText from "../atoms/DetailDescText";

/**
 * 手順詳細の説明文を記載したカード生成
 * @param {string} desc 手順詳細説明テキスト
 * @returns 手順詳細説明文カード
 */
function DetailDescCard({ desc }) {
    return(
        <DetailDescBase>
            <DetailDescText desc={desc} />
        </DetailDescBase>
    )
}

DetailDescCard.propTypes = {
    desc: PropTypes.string
}

export default DetailDescCard;