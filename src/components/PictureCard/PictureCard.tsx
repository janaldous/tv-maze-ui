import * as React from "react";
import "./PictureCard.scss";

export interface PictureCardProps {
  imageURL?: string;
  text: string;
}

const PictureCard: React.FC<PictureCardProps> = (props) => {
  return (
    <div className="picture-card">
      {props.imageURL ? (
        <img className="image" alt={props.text} src={props.imageURL} />
      ) : (
        <div className="image image-substitute"></div>
      )}
      <div className="mt-3">{props.text}</div>
    </div>
  );
};

export default PictureCard;
