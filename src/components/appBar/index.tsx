import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { AppBarContainer } from "./styles";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  handleDrawer: () => void;
}

const AppBar = ({ open, handleDrawer }: AppBarProps) => {
  return (
    <AppBarContainer position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Master's Tools - RPG
        </Typography>
      </Toolbar>
    </AppBarContainer>
  );
};

export { AppBar };
