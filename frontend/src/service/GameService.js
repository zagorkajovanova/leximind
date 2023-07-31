import axios from "../axios/axios";

export const GamesService = {
    fetchGames: () => {
        return axios.get('/games');
    }
}