import axios from "axios";
// import {serviceOptions} from "./services"

const animalUri = "https://vaddb.liamgombart.com/animals";

const api = axios.create({
  baseURL: env.REACT_APP_TLD,
  headers: {
    "Content-Type": "application/json",
    "Authentication": env.REACT_APP_API_KEY,
    "Accept": "application/json"
  }, 
});

export default api;
