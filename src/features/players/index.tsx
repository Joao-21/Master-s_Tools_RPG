import styles from "./styles.module.scss";
import logo from "../../assets/Monk-Leonardo.jpg";
import { CharacterCard } from "../../components/characterCard";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const PlayersPage = () => {
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
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export { PlayersPage };
