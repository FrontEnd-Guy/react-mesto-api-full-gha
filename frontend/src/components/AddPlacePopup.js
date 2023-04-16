import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { PopupWithForm } from "./PopupWithForm";

export function AddPlacePopup({
  isOpen,
  onOverlay,
  onClose,
  onAddPlace,
  buttonText,
}) {
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({});
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  }

  return (
    <PopupWithForm
      title="New place"
      name="add-place"
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
          id="place-input"
          className="popup__input popup__input_field_place-name"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          onChange={handleChange}
        />
        <span className="popup__input-error place-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          value={values.link || ""}
          id="link-input"
          className="popup__input popup__input_field_image-link"
          name="link"
          placeholder="Image link"
          required
          onChange={handleChange}
        />
        <span className="popup__input-error link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
