import { Button } from "@mui/material";
import styles from "./styles.module.scss";

interface Props {
  buttonName: string;
  handleClick: () => void;
}

const MainButton = ({ buttonName, handleClick }: Props) => {
  return (
    <Button className={styles.button} onClick={handleClick}>
      {buttonName}
    </Button>
  );
};

export { MainButton };
