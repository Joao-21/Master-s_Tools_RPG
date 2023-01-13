import * as React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/Monk-Leonardo.jpg";
import { CharacterCard } from "./components/characterCard";
import { AddButton } from "../../components/addButton";
import CharacterSheet from "./components/characterSheet";

const PlayersPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(!open);
    // console.log("dsadsadsa");
  };


  return (
    <div className={styles.container}>
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
        level={3}
        totalHP={28}
        totalAC={17}
        strength={2}
        dexterity={2}
        constitution={2}
        intelligence={2}
        wisdom={2}
        charisma={2}
      />
      <AddButton handleAddButton={handleOpenModal} />
      <CharacterSheet open={open} handleClose={handleOpenModal}/>

    </div>
  );
};

export { PlayersPage };
