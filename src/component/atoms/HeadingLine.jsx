//タイトルの罫線
import PropTypes from "prop-types";
function HeadingLine({className,onClick,children}) {
  return(
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

HeadingLine.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default HeadingLine;