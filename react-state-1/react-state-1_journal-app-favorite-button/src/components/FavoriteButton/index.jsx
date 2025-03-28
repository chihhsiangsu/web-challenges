import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  // This should be a state variable.
  const [isFavorite, setIsFavorite] = useState(false);

  function handdleToggle() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className={
        isFavorite ? "favorite-button:hover " : "favorite-button:active"
      }
      onClick={() => {
        handdleToggle();
        //console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
