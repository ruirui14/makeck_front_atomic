import PropTypes from "prop-types";
import HeaderBase from "../atoms/HeaderBase";
import images from "../../hooks/images";
import ArrowIcon from "../atoms/ArrowIcon";
import { useNavigate } from "react-router-dom";

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
                <div id="appName">MakeCK</div> 
                </>
            ) : (
                <>
                <ArrowIcon
                    direction="left"
                    className="backBtn"
                    onClick={() => navigate(-1)}
                />
                <div id="pageTitle">{title}</div>
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