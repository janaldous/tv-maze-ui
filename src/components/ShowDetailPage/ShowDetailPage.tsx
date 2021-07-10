import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  CastDetail,
  Season,
  ShowDetail,
} from "../../generated-sources/openapi";
import PictureCard from "../PictureCard/PictureCard";
import { ShowsService } from "../../service/ShowsService";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import "./ShowDetailPage.scss";
import FavoriteService from "../../service/FavoriteService";
import dompurify from "dompurify";

interface FavoriteIconProps {
  favorite: boolean;
  toggleFavorite: () => void;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = (props) => {
  const icon = props.favorite ? (
    <StarRoundedIcon fontSize="large" style={{ color: "gold" }} />
  ) : (
    <StarBorderRoundedIcon fontSize="large" style={{ color: "grey" }} />
  );

  return (
    <div onClick={props.toggleFavorite} style={{ cursor: "pointer" }}>
      {icon}
    </div>
  );
};

const ShowDetailPage: React.FC<{}> = () => {
  const { showId } = useParams<{ showId: string }>();
  const location = useLocation<{ redirectUrl: string }>();

  const [showDetail, setShowDetail] = React.useState<ShowDetail>();
  const [cast, setCast] = React.useState<Array<CastDetail>>([]);
  const [seasons, setSeasons] = React.useState<Array<Season>>([]);
  const [favorite, setFavorite] = React.useState<boolean>(
    FavoriteService.isFavorite(+showId)
  );

  React.useEffect(() => {
    ShowsService.getShowDetail(+showId)
      .then((res) => {
        setShowDetail(res.data);
      })
      .then(() => {
        ShowsService.getCast(+showId).then((res) => {
          setCast(res.data);
        });
        ShowsService.getSeasons(+showId).then((res) => {
          setSeasons(res.data);
        });
      });
  }, [showId]);

  React.useEffect(() => {
    if (favorite) {
      FavoriteService.addFavorite(+showId);
    } else {
      FavoriteService.removeFavorite(+showId);
    }
  }, [showId, favorite]);

  return (
    <div className="d-flex mt-4 show-detail-page">
      <div className="back-link">
        <Link to={`${location.state.redirectUrl}`}>Back</Link>
      </div>
      <div className="main-content ps-2">
        <div className="row mb-4">
          <div className="d-flex mb-4 align-items-end">
            <img
              src={showDetail?.image?.medium}
              alt={showDetail?.name}
              className="main-image me-2"
            />
            <div className="h1 mb-0">{showDetail?.name}</div>
            <FavoriteIcon
              favorite={favorite}
              toggleFavorite={() => setFavorite((oldVal) => !oldVal)}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(showDetail?.summary || ""),
            }}
          ></div>
        </div>
        <div className="row mb-4">
          <h2 className="mb-3">Cast</h2>
          <div className="picture-scroll d-flex">
            {cast.length === 0 && <div>No data</div>}
            {cast.map((castMember) => (
              <div className="me-3" key={castMember.character.id}>
                <PictureCard
                  imageURL={castMember.person.image?.medium}
                  text={castMember.person.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row mb-4">
          <div className="h2 mb-3">Seasons</div>
          <div className="picture-scroll d-flex">
            {seasons.length === 0 && <div>No data</div>}
            {seasons.map((season) => (
              <div className="me-3" key={season.number}>
                <PictureCard
                  imageURL={season.image?.medium}
                  text={`Season ${season.number}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailPage;
