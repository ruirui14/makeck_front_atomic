import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import SelectRecipieList from "../component/molecules/SelectRecipieList";

export default function CustomDialog({
  isOpen,
  content,
  test_content,
  // confirmButtonLabel,
  cancelButtonLabel,
  //onConfirm,
  onCancel,
}) {
  console.log("test_content >>>", test_content);
  return (
    <React.Fragment>
      {/* Dialogコンポーネントの利用 */}
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          left: "0%", // ダイアログの表示位置のカスタマイズ
          "& .MuiPaper-root": {
            // ダイアログ全体のスタイルを変更
            backgroundColor: "#F8F5F2",
            borderRadius: "25px", // 角丸
          },
        }}
      >
        {/* DialogContentコンポーネントの利用 */}
        <DialogContent>
          {/* DialogContentTextコンポーネントの利用 */}
          <DialogContentText id="alert-dialog-description">
            {content} {/*選択中レシピ(ダイアログタイトル)*/}
          </DialogContentText>
        </DialogContent>

        {/*料理画像コンポーネント*/}
        <SelectRecipieList recipes={test_content}/>
       
        {/* DialogActionsコンポーネントの利用 */}
        <DialogActions>
          {/* Buttonコンポーネントの利用 */}
          {/* {<Button onClick={onConfirm} sx={{ fontSize: "20px" }}>
            {confirmButtonLabel}
          </Button>} */}
          {/* Buttonコンポーネントの利用 ダイアログ閉じるボタン*/}
          <Button
            onClick={onCancel}
            sx={{
              fontSize: "20px",
              marginRight: "38%",
            }}
          >
            {cancelButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.node,
  test_content: PropTypes.array,
  cancelButtonLabel: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};
