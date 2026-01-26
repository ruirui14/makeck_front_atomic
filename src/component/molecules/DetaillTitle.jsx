import PropTypes from "prop-types";
import DetailNumber from "../atoms/DetailNumber";
import DetailTitleBox from "../atoms/DetailTitleBox";

/**
 * 手順詳細画面の見出し(手順番号+料理名+枠線)
 * @param {string} recipeName   手順番号
 * @param {string} detailName   料理名
 * @returns 手順詳細画面見出し
 */
function DetailTitle({ recipeName, detailName }) {
    return(
        <DetailTitleBox recipeName={recipeName}>
            <DetailNumber num={detailName} />
        </DetailTitleBox>
    )
}

DetailTitle.propTypes = {
    recipeName: PropTypes.string,
    detailName: PropTypes.string
}

export default DetailTitle;