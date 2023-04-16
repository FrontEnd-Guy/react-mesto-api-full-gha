import { useContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { PopupWithForm } from "./PopupWithForm";

export function EditProfilePopup({
  isOpen,
  onOverlay,
  onClose,
  onUpdateUser,
  buttonText,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({
      name: currentUser?.name,
      about: currentUser?.about,
    });
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit-profile"
      isOpen={isOpen}
      onOverlay={onOverlay}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <label className="popup__field">
        <input
          type="text"
          value={values.name || ""}
          id="name-input"
          className="popup__input popup__input_field_name"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
          onChange={handleChange}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          value={values.about || ""}
          id="job-input"
          className="popup__input popup__input_field_job"
          name="about"
          placeholder="About"
          required
          minLength="2"
          maxLength="200"
          onChange={handleChange}
        />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
