import { PopupWithForm } from "./PopupWithForm";
import { useRef, useEffect } from "react";

export function EditAvatarPopup({
  isOpen,
  onOverlay,
  onClose,
  onUpdateAvatar,
  buttonText,
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Update avatar"
      name="update-avatar"
      isOpen={isOpen}
      onOverlay={onOverlay}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <label className="popup__field">
        <input
          type="url"
          ref={inputRef}
          id="avatar-input"
          className="popup__input popup__input_field_avatar-link"
          name="avatar-link"
          placeholder="Image link"
          required
        />
        <span className="popup__input-error avatar-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
