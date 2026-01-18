import PropTypes from "prop-types";
import FooterMenu from "../atoms/FooterMenu";
import FooterBase from "../atoms/FooterBase";
import FooterButton from "../molecules/FooterButton";

/**
 * 使用ページに合わせたフッター生成
 * @param {bool}    isHome  使用ページがHomeか(default: false)
 * @param {label}   label   フッターボタン内表示文字列
 * @param {func}    onClick フッターボタン押下時発火イベント  
 * @returns フッター全体
 */
function FooterSection({isHome = false, label, onClick}) {
    return (
        <>{
            isHome ? (
                // Home
                <footer id="homeFooter">
                    <FooterMenu buttonType="select" />
                    <FooterMenu buttonType="share" />
                </footer>
            ) : (
                // Home以外
                <FooterBase>
                    <FooterButton 
                        label={label}
                        onClick={onClick}
                    />
                </FooterBase>
            )
        }</>  
    )
}

FooterSection.propTypes = {
    isHome: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default FooterSection;