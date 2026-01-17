//ヘッダー内のタイトルテキスト
import PropTypes from "prop-types";

function PageTitle({id, pageName}) {
  return(
    <div id={id}>{pageName}</div>
  );
}

PageTitle.propTypes = {
  id: PropTypes.string,
  pageName: PropTypes.string
}

export default PageTitle;