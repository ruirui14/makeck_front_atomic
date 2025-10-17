import _React from 'react';
import { _useNavigate } from "react-router-dom";
import CustomDialog from "./CustomDialog";
import PropTypes from "prop-types";

export default function TestDialog({ isOpen, onConfirm, onCancel }) {
    const content = "テストカスタムダイアログ";
  
    return (
      <CustomDialog
        isOpen={isOpen}
        content={content}
        confirmButtonLabel="OK"
        cancelButtonLabel="キャンセル"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
}

  TestDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };