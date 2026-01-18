import _React from 'react';
import { _useNavigate } from "react-router-dom";
import CustomDialog from "./CustomDialog";
import PropTypes from "prop-types";

export default function TestDialog({ isOpen, onCancel, test_content }) {
  const content = "テストカスタムダイアログ";

  return (
    <CustomDialog
      isOpen={isOpen}
      content={content}
      cancelButtonLabel="キャンセル"
      onCancel={onCancel}
      test_content={test_content}
    />
  );
}

  TestDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    test_content: PropTypes.array,
  };