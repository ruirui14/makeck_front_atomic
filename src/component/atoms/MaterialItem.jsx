//材料名・単位のテキスト
import PropTypes from "prop-types";
function MaterialItem({ nameClassName, quantityClassName, name, quantity, unit }) {
  return (
    <>
      <div className={nameClassName}> {name} </div>
      <div className={quantityClassName}>
        {quantity || ""}
        {unit || ""}
      </div>
    </>
  );
}

MaterialItem.propTypes = {
  nameClassName: PropTypes.string,
  quantityClassName: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.string,
  unit: PropTypes.string,
};
export default MaterialItem;
