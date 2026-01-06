import images from '../hooks/images';
import { useNavigate } from "react-router-dom";
import ButtonBase from '../component/atoms/ButtonBase';
import HeaderBase from '../component/atoms/HeaderBase';

function TestH() {
  const navigate = useNavigate();
  return (
    <div className="App noScroll">
      <HeaderBase></HeaderBase>

      <main className="">
        <div className="cookingImgwrapper">
          <img
            className="cookingImg"
            src={images.makeckImage}
            alt="料理写真(暫定)"
          ></img>
        </div>

        <div className="selectionMenu">
          <div className="menuTitle">レシピ選択方法</div>
          <ButtonBase id="fromFirst" onClick={() => navigate("/RecipeSelection")}>
            <p className="btnText">1からレシピ選択</p>
          </ButtonBase>

          <ButtonBase id="fromRegistered" onClick={() => navigate("/menuConfirmation")}>
            <p className="btnText">登録レシピから選択</p>
          </ButtonBase>
        </div>

        <div className="supplementText">coming soon...</div>

        {/* <div className="iconWrapper">
          <img className="potIcon" src={images.pot} alt='鍋アイコン'></img>
          <img className="mixerIcon" src={images.mixer} alt='ミキサーアイコン'></img>
        </div> */}
      </main>

      <footer id="homeFooter">
        <div id="selectBtn" className="footerMenu">
          <img className="icon" src={images.book} alt="レシピ本アイコン"></img>
          <div>レシピ選択</div>
        </div>

        <div id="shareBtn" className="footerMenu">
          <img className="icon" src={images.share} alt="共有アイコン"></img>
          <div>レシピ共有</div>
        </div>
      </footer>
    </div>
  );
}

export default TestH;