import { API_PARAMS } from '../interfaces/enums/apiParams';
import { API_URL } from './api';
import { HttpService } from './http.services';
import { urlParamReplace } from '../utils/helpers/UrlParamReplace';

const http = new HttpService();

export const getMovies = async () => {
    const api = API_URL.getAllMovies;
    const [err, resp] = await http.get(api);

    return { error: err, response: resp?.data };
};

export const getSearchedMovies = async (text: string) => {
    const api = API_URL.getFilteredMovies;
    const finalApi = urlParamReplace(api, { [API_PARAMS.SearchText]: text });
    const [err, resp] = await http.get(finalApi);

    return { error: err, response: resp?.data };
};