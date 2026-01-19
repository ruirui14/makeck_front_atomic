import PropTypes from "prop-types";
import HeaderBase from "../atoms/HeaderBase";
import images from "../../hooks/images";
import ArrowIcon from "../atoms/ArrowIcon";
import { useNavigate } from "react-router-dom";
import PageTitle from "../atoms/PageTitle";

/**
 * ページに合わせたヘッダー生成
 * @param {bool}    isHome  使用ページがHomeであるか(default: false)
 * @param {string}  title   ページタイトル(ヘッダー内に表示)
 * @returns ヘッダー全体
 */
function HeaderSection({isHome = false, title}) {
    const navigate = useNavigate();
    return(
        <HeaderBase>{
            isHome ? (
                <>
                <img src={images.icon} id="userIcon" alt="icon"/>
                <PageTitle id="appName" pageName="MakeCK" />
                </>
            ) : (
                <>
                <ArrowIcon
                    direction="left"
                    className="backBtn"
                    onClick={() => navigate(-1)}
                />
                <PageTitle id="pageTitle" pageName={title} />
                </>
            )
        }</HeaderBase>
    )
}

HeaderSection.propTypes = {
    isHome: PropTypes.bool,
    title: PropTypes.string
}

export default HeaderSection;