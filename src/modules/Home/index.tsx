import { useState, useEffect, useCallback } from "react";
import { Typography } from "@material-ui/core";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import FilterInput from "../../components/FilterInput";
import MovieCard from "../../components/MovieCard";

import "./Home.scss";
import { getMovies, getSearchedMovies } from "../../core/services/Home.services";
import { FilterMovies } from "../../core/utils/helpers/FilterMovies";
import { MEDIA_TYPE } from "../../core/interfaces/enums/MediaType";
import { Movie } from "../../core/interfaces/Movies";
import { EmptyScreen } from "../../components/EmptyScreen";
import { mediaTypeOptions } from "../../core/utils/Constants";
import { Option } from "../../core/interfaces/Option";

function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterMediaTypeValue, setFilterMediaTypeValue] = useState<Option>(mediaTypeOptions[0]);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  // get movies
  useEffect(() => {
    getData();
  }, []);

  // get movies
  const getData = async () => {
    let movies = await getMovies();
    if (movies.response) {
      setMovies(movies.response.results);
      setFilteredMovies(movies.response.results);
    }
  };

  // filter movies
  useEffect(() => {
    const result = FilterMovies(movies, filterMediaTypeValue.label);
    setFilteredMovies(result);
  }, [filterMediaTypeValue, movies]);

  // search movies
  const getSearch = useCallback(async () => {
    const movies = await getSearchedMovies(searchValue);
    setFilteredMovies(movies.response.results);
  }, [searchValue]);

  // search movies
  useEffect(() => {
    if (searchValue !== "") {
      getSearch();
    }
  }, [getSearch, searchValue]);

  // handle search input
  const handleChange = (value: string) => {
    if (value === "") {
      setFilteredMovies(movies);
    }
    setSearchValue(value);
  };

  return (
    <div className="home-screen">
      {/* nav bar */}
      <Header />

      <div className="filter-container row mx-0 gap-3">
        <SearchInput
          name="search-movie"
          value={searchValue}
          onChange={handleChange}
          placeholder={"FInd movies tv shows documentary and more"}
          wrapperClass="col-12 col-md-4"
        />

        <FilterInput
          name="Media Type"
          placeholder={"Media Type"}
          options={mediaTypeOptions}
          value={filterMediaTypeValue}
          onChange={(value: Option | null) => {
            setSearchValue("");
            value && setFilterMediaTypeValue(value);
          }}
          wrapperClass="col-12 col-md-2"
        />
      </div>

      <div className="main-screen">
        {/* title */}
        <Typography className="title ms-3">Last Movies & TV Shows</Typography>

        {filteredMovies.length > 0 ? (
          <div className="movies row w-100 m-0">
            {filteredMovies.map((movie: Movie) => {
              return <MovieCard cardClassName="col-6 col-md-3 mb-5 px-3" movie={movie} />;
            })}
          </div>
        ) : (
          <EmptyScreen message={"No Data To Show"} />
        )}
      </div>
    </div>
  );
}
export default Home;
