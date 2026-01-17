// ガントチャート 手順タイプ名・色ガイド(単体)
import PropTypes from "prop-types";
import TypeColor from "../atoms/TypeColor";
import ProcessTypeName from "../atoms/ProcessTypeName";

/**
 * 各調理タイプの情報
 */
const typeInfo = {
    prepare: {color: "yellow", name: "下準備"},
    cook: {color: "red", name: "調理"},
    finish: {color: "green", name: "仕上げ"},
}

/**
 * ガントチャートの手順タイプガイド(単体)
 * @param {string} pType    手順タイプ(prepare: 下準備, cook: 調理, finish: 仕上げ) 
 */
function ProcessTypeItem({ pType }) {
    const type = typeInfo[pType];
    console.log("タイプ: ", type);
    return(
        <>
            <TypeColor color={ type.color } />
            <ProcessTypeName typeName={ type.name } />
        </>
    );
}

ProcessTypeItem.propTypes = {
    pType: PropTypes.oneOf(["prepare", "cook", "finish"]),
}

export default ProcessTypeItem;