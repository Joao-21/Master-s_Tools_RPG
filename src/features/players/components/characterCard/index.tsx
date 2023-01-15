import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import { PlayerProps } from "../../types";

interface Props {
  playerData: PlayerProps;
  handleEdit: (event: any) => void;
}

const CharacterCard = ({ playerData, handleEdit }: Props) => {
  const {
    armorClass,
    characterName,
    charisma,
    className,
    constitution,
    dexterity,
    id,
    intelligence,
    level,
    ownerName,
    race,
    strength,
    totalhp,
    wisdom,
  } = playerData;

  console.log("id", id);

  return (
    <Card
      style={{
        boxShadow: "2px 2px 1px #2f3e46",
        overflow: "auto",
        display: "grid",
        gridTemplateRows: "60% 25% 15%",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <CardHeader
            title={characterName}
            subheader={ownerName}
            className={styles.cardHeader}
          />
          <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Class:</b> {className}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Race:</b> {race}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Level:</b> {level}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Total HP:</b> {totalhp}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Armor Class:</b>
              {armorClass}
            </Typography>
          </div>
        </div>
      </Box>
      <CardContent
        style={{
          padding: "8px 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 14 }} style={{ fontWeight: "bold" }}>
          Saving Throws:
        </Typography>
        <div className={styles.saving_throws}>
          <div>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Strength:</b> {strength}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Dexterity:</b> {dexterity}
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Constitution:</b> {constitution}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Intelligence:</b> {intelligence}
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Wisdom:</b> {wisdom}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Charisma:</b> {charisma}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions style={{ padding: "0px 16px", justifyContent: "end" }}>
        <Button
          style={{ background: "#513c27", color: "white" }}
          onClick={handleEdit}
          id={id}
        >
          Edit
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export { CharacterCard };
