// レシピ選択時のカテゴリ選択ボタン(複数)
import PropTypes from "prop-types";
import CategoryButton from "./CategoryButton";

function CategoryButtonList({ onSelect }) {
  const categories = [
    { text: "主食", index: 0 },
    { text: "主菜", index: 1 },
    { text: "副菜", index: 2 },
    { text: "汁物", index: 3 },
  ];

  return (
    <>
      {categories.map((c) => (
        <CategoryButton
          key={c.index}
          text={c.text}
          margin={"1px"}
          onClick={() => onSelect(c.index)}
        />
      ))}
    </>
  );
}

CategoryButtonList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoryButtonList;
