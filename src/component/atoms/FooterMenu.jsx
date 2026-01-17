//フッターのメニューボタン
import PropTypes from "prop-types";
import images from "../../hooks/images";

const menuConfig = {
  "select": {id: "selectBtn", url: images.book, alt: "レシピ本アイコン", label: "レシピ選択"},
  "share": {id: "shareBtn", url: images.share, alt: "共有アイコン", label: "レシピ共有"}
}

function FooterMenu({ buttonType }) {
  const menuType = menuConfig[buttonType];
  console.log(menuType);

  return(
    <div id={menuType.id} className="footerMenu">
      <img className="icon" src={menuType.url} alt={menuType.alt} />
      <div>{menuType.label}</div>
    </div>
  );
}

FooterMenu.propTypes = {
  buttonType: PropTypes.oneOf(["select", "share"]),
}

export default FooterMenu;