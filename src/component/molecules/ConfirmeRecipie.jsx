// 確認用料理画像+料理名
import PropTypes from "prop-types";
import RecipeImage from "../atoms/RecipeImage";
import RecipeName from "../atoms/RecipeName";

function ConfirmeRecipie({ image, name, isSelected, onClick }) {
  return (
    <div className="menuR" onClick={onClick}>
      <div className="imageWrapper">
        <RecipeImage image={image} page="RecipeSelection" />
        {isSelected && <div className="overlay">選択中</div>}
      </div>
      <RecipeName menuName={name} onClick={onClick} />
    </div>
  );
}

ConfirmeRecipie.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ConfirmeRecipie;