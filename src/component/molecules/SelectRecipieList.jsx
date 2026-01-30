// ダイアログ内 料理画像(複数)
import PropTypes from "prop-types";
import SelectRecipie from "./SelectRecipie";

function SelectRecipieList({ recipes }) {
  const frames = [
    { type: "StapleFood", alt: "選択中レシピNO主食" },
    { type: "MainDish", alt: "選択中レシピNO主菜" },
    { type: "SideDish", alt: "選択中レシピNO副菜" },
    { type: "Soup", alt: "選択中レシピNO汁物" },
  ];

  return (
    <div className="dialogContainer">
      {frames.map((frame, index) => (
        <SelectRecipie
          key={frame.type}
          recipeId={recipes[index]}
          type={frame.type}
          width={125}
          height={95}
          alt={frame.alt}
        />
      ))}
    </div>
  );
}

SelectRecipieList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectRecipieList;
