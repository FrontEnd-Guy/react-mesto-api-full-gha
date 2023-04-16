import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser?._id;
  const isLiked = card.likes.some((i) => i._id === currentUser?._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <h2 className="element__title">{card.name}</h2>
      <div className="element__like-container">
        <button
          aria-label="Like"
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
        <span className="element__like-counter">{card.likes.length}</span>
      </div>
      {isOwn && (
        <button
          aria-label="Delete"
          className="element__delete"
          type="button"
          onClick={handleDeleteClick}
        />
      )}
    </article>
  );
}

export default Card;
