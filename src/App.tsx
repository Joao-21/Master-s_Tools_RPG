import { Route, Routes } from "react-router";
import { HomePage } from "./features/home";
import { PlayersPage } from "./features/players";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </div>
  );
};

export { App };
