import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../index.css";
import { api } from "../utils/API";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Login } from "./Login";
import { Register } from "./Register";
import { ImagePopup } from "./ImagePopup";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRouteElement from "./ProtectedRoute";
import { checkAuth, signIn, signUp } from "../utils/auth";
import { InfoTooltip } from "./InfoTooltip";
import { DeleteConfirmationPopup } from "./DeleteConfirmationPopup";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardForDelete, setCardForDelete] = useState(null);
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupLoading, setIsEditProfilePopupLoading] =
    useState(false);
  const [isAddPlacePopupLoading, setIsAddPlacePopupLoading] = useState(false);
  const [isEditAvatarPopupLoading, setIsEditAvatarPopupLoading] =
    useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [isSuccessInfoTooltipStatus, setIsSuccessInfoTooltipStatus] =
    useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const handleSignUp = useCallback(
    async (data) => {
      try {
        await signUp(data);
        setInfoTooltipOpen(true);
        setIsSuccessInfoTooltipStatus(true);
        navigate("/sign-in");
      } catch (err) {
        setInfoTooltipOpen(true);
        setIsSuccessInfoTooltipStatus(false);
        console.log(err);
      }
    },
    [navigate]
  );

  const handleSignIn = useCallback(
    async (data) => {
      try {
        const { token } = await signIn(data);
        localStorage.setItem("jwt", token);
        setIsLoggedIn(true);
        navigate("/");
      } catch (err) {
        setInfoTooltipOpen(true);
        setIsSuccessInfoTooltipStatus(false);
        console.log(err);
      }
    },
    [navigate]
  );

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    navigate("/sign-in", { replace: true });
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkAuth(jwt)
        .then((data) => {
          setIsLoggedIn(true);
          setUserEmail(data.data.email);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }, [navigate]);

  function handleInfoTooltipClose() {
    setInfoTooltipOpen(false);
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getCardsList()])
        .then(([userData, cards]) => {
          setCurrentUser(userData);
          setCards(cards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function handleDeleteCardClick(card) {
    setCardForDelete(card);
    setIsDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupState(false);
    setAddPlacePopupState(false);
    setEditProfilePopupState(false);
    setIsImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
    setCardForDelete(null);
  }

  function handleUpdateUser(data) {
    setIsEditProfilePopupLoading(true);
    api
      .editUserInfo(data)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsEditProfilePopupLoading(false));
  }

  function handleUpdateAvatar(data) {
    setIsEditAvatarPopupLoading(true);
    api
      .updateAvatar(data)
      .then((updatedAvatar) => {
        setCurrentUser(updatedAvatar);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsEditAvatarPopupLoading(false));
  }

  function handleAddPlaceSubmit(data) {
    setIsAddPlacePopupLoading(true);
    api
      .createCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsAddPlacePopupLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header email={userEmail} onSignOutClick={handleSignOut} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteElement
              element={Main}
              loggedIn={loggedIn}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCardClick}
              onCardClick={handleCardClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
            />
          }
        />
        <Route path="/sign-in" element={<Login onSubmit={handleSignIn} />} />
        <Route path="/sign-up" element={<Register onSubmit={handleSignUp} />} />
      </Routes>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={handleInfoTooltipClose}
        status={isSuccessInfoTooltipStatus}
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        buttonText={isEditProfilePopupLoading ? "Saving..." : "Save"}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        buttonText={isAddPlacePopupLoading ? "Saving..." : "Save"}
      />
      <DeleteConfirmationPopup
        card={cardForDelete}
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
        onDelete={handleCardDelete}
        buttonText="Yes"
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        buttonText={isEditAvatarPopupLoading ? "Saving..." : "Save"}
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
