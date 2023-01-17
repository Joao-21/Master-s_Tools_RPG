import { Route, Routes } from "react-router";
import { MenuDrawer } from "./components/menuDrawer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  PageLayout,
  PageLayoutContainer,
} from "./components/pageLayout/styles";
import { HomePage } from "./features/home";
import { NpcsPage } from "./features/npcs";
import { PlayersPage } from "./features/players";


const theme = createTheme({
  palette: {
    primary: {
      main: "#433220",
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PageLayout>
          <MenuDrawer />
          <PageLayoutContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/players" element={<PlayersPage />} />
              <Route path="/npcs" element={<NpcsPage />} />
            </Routes>
          </PageLayoutContainer>
        </PageLayout>
      </ThemeProvider>
    </div>
  );
};

export { App };
