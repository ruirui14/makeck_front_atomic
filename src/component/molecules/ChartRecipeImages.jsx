import PropTypes from "prop-types";
import images from "../../hooks/images";
import RecipeImage from "../atoms/RecipeImage";
import RecipeNameBubble from "../atoms/RecipeNameBubble";

/**
 * 料理画像を横1列に並べたコンテナを生成
 * @param menu  料理情報(料理名表示バブルに使用)
 * @returns 選択済み料理4品の画像コンテナ
 */
function ChartRecipeImages({menu}) {
    const selectImage = JSON.parse(localStorage.getItem("select_image"));
    return(
        <div id="imagesBorder">
            <div id="imageContainer" className="grid">
              {selectImage.map((element, index) => {
                    console.log("element: ", element);
                    return (
                        <div key={`menuImage-${index}`} className="imageWrapper">
                            <RecipeNameBubble
                                className={`bubble-${index}`}
                                bgImage={images.speechBubble}
                                recipeName={menu?.[index].name}
                            />
                            {/* 料理画像コンポーネント */}
                            <RecipeImage
                                image={element}
                                page="CookProcess"
                                onclick={() => {
                                    var bubble = document.getElementsByClassName(
                                    `bubble-${index}`
                                    );
                                    console.log(bubble);
                                    bubble[0].style.display = "block";
                                    setTimeout(() => {
                                    bubble[0].style.display = "none";
                                    }, 1000);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

ChartRecipeImages.propTypes = {
    menu: PropTypes.object
}

export default ChartRecipeImages;