import CircularProgress from "@mui/material/CircularProgress";
import styles from "./styles.module.scss";

const LoadingIcon = () => {
  return <CircularProgress className={styles.loading_icon} />;
};

export { LoadingIcon };
