import CustomDialog from "./CustomDialog";
import PropTypes from "prop-types";

export default function TestDialog({ isOpen,test_content, onConfirm, onCancel }) {
    const content = "～ 選択中レシピ ～";
  
    return (
      <CustomDialog
        isOpen={isOpen}
        content={
          <div className='dialogContent'>
          {content}
          </div>
        }
        test_content={test_content}
        // confirmButtonLabel="OK"
        cancelButtonLabel="閉じる"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
}

  TestDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    test_content: PropTypes.func.isRequired,
  };