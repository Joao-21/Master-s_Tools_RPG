import { CardCampaignInfo } from "./components/cardCampaignInfo";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <CardCampaignInfo />
    </div>
  );
};

export { HomePage };
