import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { AppBarContainer } from "./styles";
import { useLocation } from "react-router";
import { CapitalizeFirstLetter } from "../../utils";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  handleDrawer: () => void;
}

const AppBar = ({ open, handleDrawer }: AppBarProps) => {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

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
          {CapitalizeFirstLetter(pathname) || "Master's Tools"} - RPG
        </Typography>
      </Toolbar>
    </AppBarContainer>
  );
};

export { AppBar };
