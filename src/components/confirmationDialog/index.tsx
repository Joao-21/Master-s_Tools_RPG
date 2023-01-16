import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { SecondaryButton } from "../secondaryButton";
import { MainButton } from "../mainButton";
import styles from "./styles.module.scss";

interface Props {
  open: boolean;
  handleDialog: () => void;
  handleConfirmAction: () => void;
}

const ConfirmationDialog = ({
  open,
  handleDialog,
  handleConfirmAction,
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={handleDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={styles.title}>
        Are you sure?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <SecondaryButton buttonName="Cancel" handleClick={handleDialog} />
        <MainButton buttonName="Yes" handleClick={handleConfirmAction} />
      </DialogActions>
    </Dialog>
  );
};

export { ConfirmationDialog };
