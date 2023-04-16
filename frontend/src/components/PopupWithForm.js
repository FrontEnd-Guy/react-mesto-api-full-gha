import { useEffect } from "react";

export function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  buttonText,
}) {
  function closeOnOverlayClick(evt) {
    if (evt.target.classList.contains("popup")) {
      onClose();
    }
  }

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <div
      className={`popup popup_action_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={closeOnOverlayClick}
    >
      <div className="popup__container">
        <button
          aria-label="Close"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__save-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
