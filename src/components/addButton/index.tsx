import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  handleAddButton: () => void;
}

const AddButton = ({ handleAddButton }: Props) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        background: "#433220",
        color: "white",
        position: "fixed",
        right: "2%",
        zIndex: "1300",
        top: "22px",
      }}
      onClick={handleAddButton}
    >
      <AddIcon />
    </Fab>
  );
};

export { AddButton };
