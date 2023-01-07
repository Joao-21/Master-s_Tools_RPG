import styles from "./styles.module.scss";
import logo from "../../assets/Monk-Leonardo.jpg";
import { CharacterCard } from "../../components/characterCard";

const PlayersPage = () => {
  return (
    <div className={styles.container}>
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
      />
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
      />
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
      />
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
      />
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
      />
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
      />
      <CharacterCard
        playerName="Leonardo"
        characterName="Edinho Chacal"
        characterClass="Barbarian"
        race="Human"
        logo={logo}
      />
    </div>
  );
};

export { PlayersPage };
