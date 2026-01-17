// ガントチャート チャート部分(単体)
import PropTypes from "prop-types";
import ProcessItem from "../atoms/ProcessItem";
import { useNavigate } from "react-router-dom";

ProcessChart.propTypes = {
    recipe: PropTypes.object,
    totalTime: PropTypes.number
}

/**
 * 与えられたレシピに合わせた1列のガントチャートを生成
 * @param {string}  recipe      レシピ識別ID 
 * @param {number}  totalTime   手順の合計時間
 * @returns 単品の手順チャート
 */
function ProcessChart({ recipe, totalTime }) {
    console.log("ProcessChart");

    // 遷移用インスタンス
    const navigate = useNavigate();
    // 手順の未表示/表示済管理配列
    let usedTaskIds = new Set();

    return(
        <div 
            className="chartWrapper"
            style={{
                height: "95%",  width: "80%",
                margin: "auto", marginTop: "0",
            }}
        >
            {/* スタートバーとの間隔確保 */}
            <ProcessItem key={`${recipe.uid}-start`} className="chartLine" />

            {/* 手順チャート */}
            {
                recipe.task.map((t) => {
                    if (t != undefined) {
                        // クラス指定
                        var c = "";

                        if (t.type == undefined) {
                            c += "chartLine";
                        } else {
                            c += `task ${t.type}`;
                        }

                        // 手順が表示済みならスキップ、未表示なら表示済みとして追加
                        if (usedTaskIds.has(t.taskId)) return null;

                        usedTaskIds.add(t.taskId);

                        // 手順表示
                        if (t.taskName == "空き時間") {
                            // 空き時間
                            return (
                                <ProcessItem key={t.taskId} className={c}  time={t.useTime / totalTime} />
                            );
                        } else {
                            // 手順
                            return(
                                <ProcessItem
                                    key={t.taskId} className={c} taskName={t.taskName}
                                    time={t.useTime / totalTime}
                                    onClick={() => {
                                        // 詳細画面へ遷移
                                        localStorage.setItem("displayName", t.taskName);
                                        localStorage.setItem("recipieName", recipe.name);

                                        navigate(`/stepsDetail/${t.taskId}`);
                                    }}
                                />
                            );
                        }
                        

                    } else {
                        return null;
                    }
                })
            }

            {/* フッターとの間隔確保 */}
            <ProcessItem key={`${recipe.uid}-end`} className="chartLine" />

        </div>
    );
}

export default ProcessChart;