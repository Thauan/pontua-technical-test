import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_MARVEL_API_URL
});

export { api };