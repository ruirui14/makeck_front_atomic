// ガントチャート 手順タイプ名・色ガイド(複数)
import ProcessTypeItem from "./ProcessTypeItem";

// 手順タイプ一覧
const processTypeList = [ "prepare", "cook", "finish" ];

function ProcessType() {
    return(
        <div id="processType">{
            processTypeList.map((t) => (
                <ProcessTypeItem pType={t}  key={t}/>
            ))
        }</div>
    );
}

export default ProcessType;