import axios from "./axios";

export const GamesService = {
    fetchGames: () => {
        return axios.get('/games');
    }
}