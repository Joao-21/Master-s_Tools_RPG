import styles from "./styles.module.scss";
import logo from "../../assets/Monk-Leonardo.jpg";
import { AddButton } from "../../components/addButton";
import { NpcCard } from "./components/npcCard";

const NpcsPage = () => {
  const handleOpenModal = () => {
    console.log("dsadsadsa");
  };

  return (
    <div className={styles.container}>
      <NpcCard
        npcName="Theodren"
        city="Bom Repouso"
        title="Rei"
        logo={logo}
        race="Humano"
        history="This is the king"
      />
      <AddButton handleAddButton={handleOpenModal} />
    </div>
  );
};

export { NpcsPage };
