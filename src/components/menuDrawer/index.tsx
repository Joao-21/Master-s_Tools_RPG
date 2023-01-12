import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useLocation, useNavigate } from "react-router";
import { Drawer, DrawerHeader, ListItemStyled } from "./styles";
import { AppBar } from "../appBar";

const MenuDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const routeName = location.pathname;

  const handleDrawerMenu = () => {
    setOpen(!open);
  };

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  const menuItems = [
    {
      name: "Home",
      route: "",
    },
    {
      name: "Players",
      route: "players",
    },
    {
      name: "NPC's",
      route: "npcs",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar open={open} handleDrawer={handleDrawerMenu} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton style={{ color: "#f9f6f2" }} onClick={handleDrawerMenu}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItemStyled
              disablePadding
              selectedroute={routeName === `/${item.route}` ? 1 : 0}
              sx={{ display: "block" }}
              onClick={() => handleNavigate(item.route)}
              key={item.route}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  style={{ color: "#f9f6f2" }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItemStyled>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export { MenuDrawer };
