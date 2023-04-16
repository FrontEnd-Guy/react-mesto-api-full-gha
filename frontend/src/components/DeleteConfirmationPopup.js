import { PopupWithForm } from "./PopupWithForm";

export function DeleteConfirmationPopup({
  card,
  isOpen,
  onOverlay,
  onClose,
  onDelete,
  buttonText,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onDelete(card);
    onClose();
  }

  return (
    <PopupWithForm
      title="Are you sure?"
      name="delete-card"
      isOpen={isOpen}
      onOverlay={onOverlay}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    />
  );
}
