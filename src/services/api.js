import axios from "axios";

const e = process.env;
const API_KEY = e.REACT_APP_API_KEY;
const TLD = e.REACT_APP_TLD;

const api = axios.create({
  baseURL: TLD,
  headers: {
    "Content-Type": "application/json",
    "Authentication": API_KEY,
    "Accept": "application/json"
  }, 
});

export default api;
