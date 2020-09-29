import axios from "axios";

const instance = axios.create({
  baseURL: "https://sandbox.iexapis.com/stable/stock/",
});

export default instance;
