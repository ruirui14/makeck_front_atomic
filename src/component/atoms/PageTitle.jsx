//ヘッダー内のタイトルテキスト
import PropTypes from "prop-types";

PageTitle.propTypes = {
  id: PropTypes.string,
  pageName: PropTypes.string

}

function PageTitle({id, pageName}) {
  return(
    <div id={id}>{pageName}</div>
  );
}

export default PageTitle;