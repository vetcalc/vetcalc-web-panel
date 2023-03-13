import axios from "axios";
// import {serviceOptions} from "./services"

const api = axios.create({
  baseURL: "https://vaddb.liamgombart.com/",
  headers: {
    "Content-Type": "application/json",
    "Authentication": env.REACT_APP_API_KEY,
    "Accept": "application/json"
  }, 
});

export default api;
