import { CardCampaignInfo } from "./components/cardCampaignInfo";
import styles from "./styles.module.scss";
// import CharacterSheet from "../../components/characterSheet";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <CardCampaignInfo />
    </div>
  );
};

export { HomePage };
