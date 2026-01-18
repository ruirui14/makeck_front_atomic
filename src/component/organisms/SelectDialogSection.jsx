// 選択レシピダイアログエリア
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import PropTypes from "prop-types";
import SelectRecipieList from "../molecules/SelectRecipieList";

function SelectDialogSection({ open, recipes, onClose }) {
  return (
    <>
      {/* Dialogコンポーネントの利用 */}
      <Dialog
        open={open}
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
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "700",
              fontFamily: "serif",
            }}
          >
            ～ 選択中レシピ ～
          </DialogContentText>
        </DialogContent>

        {/*料理画像コンポーネント*/}
        <SelectRecipieList recipes={recipes} />

        {/* DialogActionsコンポーネントの利用 */}
        <DialogActions>
          {/* Buttonコンポーネントの利用 ダイアログ閉じるボタン*/}
          <Button
            onClick={onClose}
            sx={{
              fontSize: "20px",
              marginRight: "38%",
            }}
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

SelectDialogSection.propTypes = {
  open: PropTypes.bool.isRequired,
  recipes: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SelectDialogSection;