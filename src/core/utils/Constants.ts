import { MEDIA_TYPE } from "../interfaces/enums/MediaType";
import { Option } from "../interfaces/Option";

export const baseUrl = "https://api.themoviedb.org/3";
export const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
export const backdropBaseUrl = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";

export const navItems = ["Home", "Pages", "Movies", "TV Shows", "Celebs", "Blog"];

export const mediaTypeOptions: Option[] = [
  { id: 0, label: MEDIA_TYPE.ALL },
  { id: 1, label: MEDIA_TYPE.MOVIE },
  { id: 2, label: MEDIA_TYPE.TV },
  { id: 3, label: MEDIA_TYPE.PERSON },
];
