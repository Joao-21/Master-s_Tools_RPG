import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.scss";

interface Props {
  handleAddButton: () => void;
}

const AddButton = ({ handleAddButton }: Props) => {
  return (
    <Fab
      aria-label="add"
      className={styles.fab_container}
      onClick={handleAddButton}
    >
      <AddIcon />
    </Fab>
  );
};

export { AddButton };
