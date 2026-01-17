import PropTypes from "prop-types";
import ProcessChart from "../molecules/ProcessChart";

/**
 * 4品分ガントチャート生成
 * @param {node} chartData 4品分レシピ情報
 * @returns 調理手順ガントチャートエリア
 */
function ProcessChartSection({ chartData }) {
    return(
        <>
            <div id="startBar">スタート！</div>
            <div id="chartContainer" className="grid">{
                chartData?.menu?.map((element, index) => {
                    return(
                        <ProcessChart
                            key={`chart${index}`} recipe={element}
                            totalTime={chartData.totalTime}
                        />
                    );
                })
            
            }</div>
        </>
    );
}

ProcessChartSection.propTypes = {
    chartData: PropTypes.node,
}

export default ProcessChartSection;