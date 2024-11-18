import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    timeout: 10000,
});

export const RickYMortyApiClient = {
    getCharacters: () => api.get("/character"),
    getCharacterById: (id: number) => api.get(`/character/${id}`),
}