import PropTypes from "prop-types";
import ChartRecipeImages from "../molecules/ChartRecipeImages";
import ProcessType from "../molecules/ProcessType";

// 調理手順ガントチャート 説明エリア
function ProcessOverviewSection({menu}) {
    return(
        <>
            <ProcessType />
            <ChartRecipeImages menu={menu} />
        </>
    )
}

ProcessOverviewSection.propTypes = {
    menu: PropTypes.object
}

export default ProcessOverviewSection;