//区切り線
import PropTypes from "prop-types";

function SectionLine({ className, children }) {
  return <div className={className}>{children}</div>;
}

SectionLine.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default SectionLine;
