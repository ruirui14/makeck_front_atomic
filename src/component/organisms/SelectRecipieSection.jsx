// レシピ選択エリア
import PropTypes from "prop-types";
import RecipieList from "./RecipieList";
import SectionLine from "../atoms/SectionLine";
import CategoryButtonList from "../molecules/CategoryButtonList";

function SelectRecipieSection({ menus, onCategorySelect, selectedId, onRecipeSelect }) {
  return (
    <>
      {/*主食 主菜 副菜 汁物 遷移ボタン*/}
      <div className="wrapButton">
        <CategoryButtonList onSelect={onCategorySelect} />
      </div>
      {/*区切り線*/}
      <SectionLine className="line" />
      {/*説明文*/}
      <div className="explanation">
        <p>レシピを選択してください</p>
      </div>
      {/*レシピ選択コンテナ*/}
      <RecipieList
        menus={menus}
        selectedId={selectedId}
        onSelect={onRecipeSelect}
      />
    </>
  );
}

SelectRecipieSection.propTypes = {
  menus: PropTypes.array.isRequired,
  selectedId: PropTypes.string,
  onCategorySelect: PropTypes.func.isRequired,
  onRecipeSelect: PropTypes.func.isRequired,
};

export default SelectRecipieSection;
