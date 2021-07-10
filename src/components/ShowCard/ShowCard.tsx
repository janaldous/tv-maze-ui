import { SearchResult } from "../../generated-sources/openapi/api";
import "./ShowCard.scss";

const ShowCard: React.FC<{ show: SearchResult }> = ({ show }) => {
  return (
    <div className="show-card my-3">
      {show.show.image ? (
        <img
          className="image"
          alt={show.show.name}
          src={show.show.image?.medium}
        />
      ) : (
        <div className="image image-substitute"></div>
      )}
      <div className="mt-3">
        <div className="name">{show.show.name}</div>
        <div className="genre">{show.show.genres?.join(", ")}</div>
      </div>
    </div>
  );
};

export default ShowCard;
