import http from "../http-common";

const getAllPlayers = () => {
  return http.get("/character");
};

const getPlayer = (id: String) => {
  return http.get(`/character/${id}`);
};

const createPlayer = (data: {}) => {
  return http.post("/character", data);
};

const updatePlayer = (id: string, data: {}) => {
  return http.put(`/character/${id}`, data);
};

const removePlayer = (id: string) => {
  return http.delete(`/character/${id}`);
};

const removeAllPlayers = () => {
  return http.delete("/character");
};

const getAllNpcs = () => {
  return http.get("/npc");
};

const getNpc = (id: String) => {
  return http.get(`/npc/${id}`);
};

const createNpc = (data: {}) => {
  return http.post("/npc", data);
};

const updateNpc = (id: string, data: {}) => {
  return http.put(`/npc/${id}`, data);
};

const removeNpc = (id: string) => {
  return http.delete(`/npc/${id}`);
};

const removeAllNpcs = () => {
  return http.delete("/npc");
};

const Service = {
  getAllPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  removePlayer,
  removeAllPlayers,
  getAllNpcs,
  getNpc,
  createNpc,
  updateNpc,
  removeNpc,
  removeAllNpcs,
};

export default Service;
