import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import SelectFrame from "../component/atoms/SelectFrame";

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

        <div className="dialogContainer">
          {test_content[0] ? (
            <img
              src={`https://makeck.mattuu.com/recipe/images/${test_content[0]}.jpg`}
              width={125}
              height={95}
              alt="選択中レシピNO主食"
            />
          ) : (
            <SelectFrame
              type="StapleFood"
              width={125}
              height={95}
              alt="選択中レシピNO主食"
            />
          )}
          {/* <img src="https://makeck.mattuu.com/images/00e60535e7e545c6a43b3a0baafb9200.jpg" width={125} alt="" /> */}
          {test_content[1] ? (
            <img
              src={`https://makeck.mattuu.com/recipe/images/${test_content[1]}.jpg`}
              width={125}
              height={95}
              alt="選択中レシピNO主食"
            />
          ) : (
            <SelectFrame
              type="MainDish"
              width={125}
              height={95}
              alt="選択中レシピNO主食"
            />
          )}
          {test_content[2] ? (
            <img
              src={`https://makeck.mattuu.com/recipe/images/${test_content[2]}.jpg`}
              width={125}
              height={95}
              alt="選択中レシピNO副菜"
            />
          ) : (
            <SelectFrame
              type="SideDish"
              width={125}
              height={95}
              alt="選択中レシピNO副菜"
            />
          )}
          {test_content[3] ? (
            <img
              src={`https://makeck.mattuu.com/recipe/images/${test_content[3]}.jpg`}
              width={125}
              height={95}
              alt="選択中レシピNO汁物"
            />
          ) : (
            <SelectFrame
              type="Soup"
              width={125}
              height={95}
              alt="選択中レシピNO汁物"
            />
          )}
        </div>

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
  content: PropTypes.func.isRequired,
  test_content: PropTypes.func.isRequired,
  cancelButtonLabel: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
