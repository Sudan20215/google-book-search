import axios from "axios";
export default axios.create({
  baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:3001" : "https://googlebooks0125.herokuapp.com",
  headers:{
    'Access-Control-Allow-Origin':'*'
  }
});

