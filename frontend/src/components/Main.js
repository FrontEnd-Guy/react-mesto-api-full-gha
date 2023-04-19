import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  cards,
  onCardLike,
  onCardDelete,
  onCardClick,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
}) {
  const currentUser = useContext(CurrentUserContext);

  const cardsElements = cards.map((card) => {
    return (
      <Card
        key={card._id}
        card={card}
        onCardClick={(card) => onCardClick(card)}
        onCardLike={(card) => onCardLike(card)}
        onCardDelete={(card) => onCardDelete(card)}
      />
    );
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser?.avatar}
            alt="Автарака пользователя"
            className="profile__avatar"
          />
          <button
            area-label="Edit Profile Picture"
            className="profile__avatar-edit-button"
            type="button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__name">{currentUser?.name}</h1>
          <p className="profile__job">{currentUser?.about}</p>
          <button
            aria-label="Edit Profile Info"
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          aria-label="Add Card"
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">{cardsElements}</section>
    </main>
  );
}

export default Main;
