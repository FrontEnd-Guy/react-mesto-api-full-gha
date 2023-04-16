import signUpFail from "../images/signup-fail.svg";
import signUpSuccess from "../images/signup-success.svg";

export function InfoTooltip({ isOpen, onClose, status }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup_action_signup-status">
        <button
          className="popup__close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <img src={!status ? signUpFail : signUpSuccess} />
        <h2 className="popup__title popup__title_signup-status">
          {!status
            ? "Something went wrong! Try again."
            : "You have successfully signed up!"}
        </h2>
      </div>
    </div>
  );
}
