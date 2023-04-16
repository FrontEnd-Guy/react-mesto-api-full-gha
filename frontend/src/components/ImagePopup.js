import { useEffect } from "react";

export function ImagePopup({ isOpen, card, onClose }) {
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
      className={`popup popup_action_view-photo ${card ? "popup_opened" : ""}`}
      onClick={closeOnOverlayClick}
    >
      <figure className="popup__figure">
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <figcaption className="popup__figcaption">{card?.name}</figcaption>
        <button
          aria-label="Close"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}
