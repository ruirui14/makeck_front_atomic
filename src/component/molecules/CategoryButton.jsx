// レシピ選択時のカテゴリ選択ボタン(単体)
import PropTypes from "prop-types";
import ButtonLabel from "../atoms/ButtonLabel";
import ButtonBase from "../atoms/ButtonBase";

function CategoryButton({ text, onClick, margin }) {
  return (
    <ButtonBase className="seniButton" onClick={onClick}>
      <ButtonLabel text={text} margin={margin} />
    </ButtonBase>
  );
}

CategoryButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  margin: PropTypes.string,
};

export default CategoryButton;
