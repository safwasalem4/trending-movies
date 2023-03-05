import { useNavigate, Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./MovieCard.scss";
import { ROUTE_PATHS } from "../../core/interfaces/enums/RoutesPaths";
import { posterBaseUrl } from "../../core/utils/Constants";
import { Movie } from "../../core/interfaces/Movies";
import placeholder from "../../assets/images/placeholder.png";

type MovieCardProps = {
  movie: Movie;
  cardClassName: string;
};

export default function MovieCard({ cardClassName, movie }: MovieCardProps) {
  const { poster_path, name, title, vote_average, id, media_type } = movie;

  const navigate = useNavigate();

  return (
    <div
      className={`movie-card ${cardClassName}`}
      onClick={() =>
        navigate(`${ROUTE_PATHS.details.replace(":media_type", media_type).replace(":id", id.toString())}`)
      }>
      <Card className={`card`}>
        <CardActionArea>
          {/* poster image */}
          <CardMedia
            component="img"
            height="400"
            src={poster_path ? `${posterBaseUrl}${poster_path}` : placeholder}
            alt="poster"
            className="image"
          />

          {/* title */}
          <Typography gutterBottom className={"movie-name"}>
            {name ?? title}
          </Typography>

          {/* rate */}
          <div className="rate">{Number(vote_average).toFixed(1)}</div>
        </CardActionArea>
      </Card>
    </div>
  );
}
