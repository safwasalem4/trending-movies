import { MEDIA_TYPE } from "../../interfaces/enums/MediaType"
import { Movie } from "../../interfaces/Movies"

export const FilterMovies = (movies: Movie[], mediaType: string) => {
  if (mediaType === MEDIA_TYPE.ALL) return movies

  const result = movies.filter((movie: Movie) => movie.media_type === mediaType)
  return result
}
