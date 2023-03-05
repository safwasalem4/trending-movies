import { API_URL } from "./api";
import { API_PARAMS } from "../interfaces/enums/apiParams";
import { HttpService } from "./http.services";
import { urlParamReplace } from "../utils/helpers/UrlParamReplace";

const http = new HttpService();

export const getMovieDetails = async (mediaType: string, id: string) => {
  const api = API_URL.getMovieDetails;
  const finalApi = urlParamReplace(api, { [API_PARAMS.MediaType]: mediaType, [API_PARAMS.Id]: id });
  const [err, resp] = await http.get(finalApi);

  return { error: err, response: resp?.data };
};
