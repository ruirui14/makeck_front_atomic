//カテゴリ別レシピ選択画面テンプレート
import PropTypes from "prop-types";
import images from "../../hooks/images";
import HeaderSection from "../organisms/HeaderSection";
import FooterSection from "../organisms/FooterSection";
import SelectRecipieSection from "../organisms/SelectRecipieSection";
import SelectDialogSection from "../organisms/SelectDialogSection";

function RecipeSelectionTemp({
  title,
  menus,
  selectedId,
  onCategorySelect,
  onRecipeSelect,
  isDialogOpen,
  selectedRecipes,
  onDialogClose,
  onDialogClick,
  onFooterClick,
}) {
  return (
    <>
      <div className="App">
        {/*ヘッダー*/}
        <HeaderSection title={title} />

        <main>
          {/*検索フォーム*/}
          <div className="Form">
            <form>
              <input
                className="FormDesign"
                type="text"
                data-search="search"
                placeholder="キーワード検索"
              />
            </form>
          </div>

          {/*レシピ選択エリア*/}
          <SelectRecipieSection
            menus={menus}
            selectedId={selectedId}
            onCategorySelect={onCategorySelect}
            onRecipeSelect={onRecipeSelect}
          />

          {/*レシピ選択中モーダル*/}
          <div>
            <SelectDialogSection
              open={isDialogOpen}
              recipes={selectedRecipes}
              onClose={onDialogClose}
            />

            <button className="DialogButton" onClick={onDialogClick}>
              <img src={images.selectMenu} alt="ボタン画像" />
            </button>
          </div>
        </main>

        {/*フッター*/}
        <FooterSection label="献立決定" onClick={onFooterClick} />
      </div>
    </>
  );
}

RecipeSelectionTemp.propTypes = {
  title: PropTypes.string.isRequired,
  menus: PropTypes.array.isRequired,
  selectedId: PropTypes.string,
  isDialogOpen: PropTypes.bool.isRequired,
  selectedRecipes: PropTypes.array.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
  onRecipeSelect: PropTypes.func.isRequired,
  onDialogClick: PropTypes.func.isRequired,
  onDialogClose: PropTypes.func.isRequired,
  onFooterClick: PropTypes.func.isRequired,
};
export default RecipeSelectionTemp;
