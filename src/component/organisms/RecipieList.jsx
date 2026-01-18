// レシピ(料理名+画像)一覧エリア
import PropTypes from "prop-types";
import ConfirmeRecipie from "../molecules/ConfirmeRecipie";

function RecipieList({ menus, selectedId, onSelect }) {
  return (
    <div id="recipeChoiceContainer">
      {menus.map((menu) => {
        const isSelected = selectedId === String(menu.id); 

        return (
          <div
            className={`menuWrapperR ${isSelected ? "selected" : ""}`}
            key={menu.id}
            onClick={() => onSelect(menu.id, menu.image)}
          >
            <ConfirmeRecipie
              image={menu.image}
              name={menu.name}
              isSelected={isSelected}
            />
          </div>
        );
      })}
    </div>
  );
}

RecipieList.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default RecipieList;
