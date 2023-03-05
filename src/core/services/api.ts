import { API_PARAMS } from '../interfaces/enums/apiParams';

export const API_URL = {
    getAllMovies: '/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9',
    getFilteredMovies: `/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=$${API_PARAMS.SearchText}`,
    getMovieDetails: `/$${API_PARAMS.MediaType}/$${API_PARAMS.Id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
}