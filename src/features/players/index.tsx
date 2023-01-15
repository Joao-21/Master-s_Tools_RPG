import * as React from "react";
import styles from "./styles.module.scss";
import { CharacterCard } from "./components/characterCard";
import { AddButton } from "../../components/addButton";
import CharacterSheet from "./components/characterSheet";
import axios from "axios";
import { PlayerProps } from "./types";

const emptyPlayer = {
  armorClass: 0,
  characterName: "",
  charisma: 0,
  className: "",
  constitution: 0,
  dexterity: 0,
  id: "",
  intelligence: 0,
  level: 0,
  ownerName: "",
  race: "",
  registrationDate: "",
  strength: 0,
  totalhp: 0,
  wisdom: 0,
};

const PlayersPage = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState("");
  const [playersData, setPlayersData] = React.useState([] as PlayerProps[]);
  const [playerToEdit, setPlayerToEdit] = React.useState(emptyPlayer);

  const toggleModal = () => {
    if (open) {
      setPlayerToEdit(emptyPlayer);
      // setPlayerToEdit({} as PlayerProps);
      // The line above generates a warning:
      // It complained that I was setting a controlled input to uncontrolled.
    }
    setOpen(!open);
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.target.id);
    // console.log(players[0]);
    const id = event.currentTarget.id;
    const players = playersData.filter((player) => player.id === id);
    setOpen(true);
    setPlayerToEdit(players[0]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setPlayerToEdit({ ...playerToEdit, [name]: value });
  };

  const getPlayersListAPI = async () => {
    try {
      setLoading("loading");
      const res = await axios.get(
        `https://rpgprojectlabs.azurewebsites.net/character`,
        {}
      );
      setLoading("loaded");
      setPlayersData(res.data.content);
    } catch (err) {
      setLoading("error");
    }
  };

  const postNewPlayerAPI = async (newPlayer: PlayerProps) => {
    try {
      axios.post(
        "https://rpgprojectlabs.azurewebsites.net/character/",
        newPlayer
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const putPlayerAPI = async (player: PlayerProps) => {
    try {
      axios.put(
        `https://rpgprojectlabs.azurewebsites.net/character/${player.id}/`,
        player
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleSubmit = () => {
    if (playerToEdit.id) {
      console.log("Editing");
      putPlayerAPI(playerToEdit);
    } else {
      console.log("New player");
      postNewPlayerAPI(playerToEdit);
    }
    toggleModal();
    getPlayersListAPI();
  };

  React.useEffect(() => {
    getPlayersListAPI();
  }, []);

  return loading === "loading" ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.container}>
      {playersData.map((player) => {
        return (
          <CharacterCard
            playerData={player}
            key={player.id}
            handleEdit={handleEdit}
          />
        );
      })}

      <AddButton handleAddButton={toggleModal} />
      <CharacterSheet
        open={open}
        handleClose={toggleModal}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        playerData={playerToEdit}
      />
    </div>
  );
};

export { PlayersPage };
