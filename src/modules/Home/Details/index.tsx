import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import "./Details.scss";
import { getMovieDetails } from "../../../core/services/Details.services";
import { backdropBaseUrl } from "../../../core/utils/Constants";
import { FormattedDate } from "../../../core/utils/helpers/FormateDate";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";
import { EmptyScreen } from "../../../components/EmptyScreen";

type RouteParams = {
  media_type: string;
  id: string;
};

export default function Details() {
  const [details, setDetails] = useState<any>();
  const params = useParams<RouteParams>();
  const { id, media_type } = params;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    if (media_type && id) {
      let result = await getMovieDetails(media_type, id);
      setDetails(result.response);
    }
  };

  return (
    <div className="movie-details">
      <Header />
      {details ? (
        <div
          style={{
            backgroundImage: `url(${`${backdropBaseUrl}/${details?.backdrop_path}`})`,
          }}
          className="cover-image"
        >
          <div className="overlay"></div>
        </div>
      ) : (
        <EmptyScreen message={"No Data To Show"} />
      )}
      {details ? (
        <div className="main-container">
          <div
            style={{
              backgroundImage: `url(${backdropBaseUrl}/${details?.poster_path})`,
            }}
            className={`image`}
          ></div>
          <div className="content">
            <div className="sub-container">
              <h3 className="white-text">2020</h3>
              <h1 className="white-text bolder">{details?.name}</h1>
              <div className="overview white-text mb-5">
                {details?.overview}
              </div>

              <div className="movie-data main-style">
                <div className="d-flex gap-3 align-items-center">
                  <PlayCircleOutlineIcon
                    className="white-text"
                    fontSize="large"
                  />
                  <div className="title white-text">WATCH THE TRAILER</div>
                </div>
                <div className="horizontal-separator mx-3" />
                <div className="dates white-text">
                  2h 36min {details?.type && "•"} {details?.type}{" "}
                  {details?.first_air_date && "•"}{" "}
                  {FormattedDate(details?.first_air_date, "MMMM D, YYYY")}
                </div>
              </div>
            </div>

            <div className="movie-details main-style">
              <div className="vote-container">
                <div className="vote-average">
                  {Number(details?.vote_average).toFixed(2)}
                </div>
                <div className="vote">IMdb</div>
              </div>

              <div className="horizontal-separator mx-3" />
              <div className="status-container">
                <div className="mt-2 mb-4">
                  <div className="status">Status</div>
                  <div className="movie-status">{details?.status}</div>
                </div>

                <div className="actions-container">
                  {/* Add icon */}
                  <AddIcon className="add-icon-container" fontSize="large" />

                  {/* Favorite icon */}
                  <FavoriteBorderIcon
                    className="favorite-icon-container"
                    fontSize="large"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
