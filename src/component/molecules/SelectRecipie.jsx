// ダイアログ内 料理画像(単体)
import PropTypes from "prop-types";
import SelectFrame from "../atoms/SelectFrame";

function SelectRecipie({ recipeId, type, width, height, alt }) {
  return recipeId ? (
    <img
      src={`https://makeck.mattuu.com/recipe/images/${recipeId}.jpg`}
      width={width}
      height={height}
      alt={alt}
    />
  ) : (
    <SelectFrame type={type} width={width} height={height} alt={alt} />
  );
}

SelectRecipie.propTypes = {
  recipeId: PropTypes.string,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
};

export default SelectRecipie;
