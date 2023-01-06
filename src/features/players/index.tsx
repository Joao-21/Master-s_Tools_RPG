import { Box } from "@mui/material";
import { MenuDrawer } from "../../components/menuDrawer";

const PlayersPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <MenuDrawer />
      <h1 style={{ marginTop: "100px" }}>PLAYERAAAS</h1>
    </Box>
  );
};

export { PlayersPage };
