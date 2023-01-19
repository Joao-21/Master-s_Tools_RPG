import axios from "axios";

export default axios.create({
  baseURL: "https://rpgprojectlabs.azurewebsites.net/",
  headers: {
    "Content-type": "application/json"
  }
});
