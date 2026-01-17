import PropTypes from "prop-types";
import ButtonBase from "../atoms/ButtonBase";
import ButtonLabel from "../atoms/ButtonLabel";

/**
 * フッター内ボタン
 * @param {func}    onClick     ボタン押下時発火イベント
 * @param {label}   label       ボタンラベルの内容
 */
function FooterButton({ onClick, label }) {
    return (
        <ButtonBase
            type="button"
            id="decisionBtn"
            onClick={onClick}
        >
            <ButtonLabel text={label} />
        </ButtonBase>
    )
}

FooterButton.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string
}

export default FooterButton;