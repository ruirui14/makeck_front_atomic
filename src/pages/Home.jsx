import images from '../hooks/images';
import { useNavigate } from "react-router-dom";
import ButtonBase from '../component/atoms/ButtonBase';
import HeaderBase from '../component/atoms/HeaderBase';
import ArrowIcon from "../component/atoms/ArrowIcon";
import FooterMenu from '../component/atoms/FooterMenu';
import ButtonLabel from "../component/atoms/ButtonLabel";
import FooterSection from '../component/organisms/FooterSection';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App noScroll">
      <HeaderBase>
        <img src={images.icon} id="userIcon" alt="icon" />
        <div id="appName">MakeCK</div>
      </HeaderBase>

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
          <ButtonBase
            id="fromFirst"
            onClick={() => navigate("/RecipeSelection")}
          >
            <ButtonLabel className="btnText" text="1からレシピ選択" />
            <ArrowIcon direction="right" className="arrow" />
          </ButtonBase>

          <ButtonBase
            id="fromRegistered"
            onClick={() => navigate("/menuConfirmation")}
          >
            <ButtonLabel className="btnText" text="登録レシピから選択" />
            <ArrowIcon direction="right" className="arrow" />
          </ButtonBase>
        </div>

        <div className="supplementText">coming soon...</div>
      </main>

      <FooterSection isHome={true} />
    </div>
  );
}

export default Home;
