import styles from "./styles.module.scss";
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
        race="Humano"
        history="This is the king"
      />
      <AddButton handleAddButton={handleOpenModal} />
    </div>
  );
};

export { NpcsPage };
