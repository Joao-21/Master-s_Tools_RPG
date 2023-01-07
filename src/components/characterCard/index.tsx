import { Card, CardContent, Typography, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./styles.module.scss";

interface Props {
  playerName: string;
  characterName: string;
  logo: string;
  characterClass: string;
  race: string;
}

const CharacterCard = ({
  playerName,
  characterName,
  logo,
  characterClass,
  race,
}: Props) => {
  return (
    <Card style={{ boxShadow: "2px 2px 1px #2f3e46", overflow: "auto" }}>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <img alt="" src={logo} className={styles.img} />
        <CardHeader
          title={characterName}
          subheader={playerName}
          className={styles.cardHeader}
        />
      </Box>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          <b>Class:</b> {characterClass}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          <b>Race:</b> {race}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CharacterCard };
