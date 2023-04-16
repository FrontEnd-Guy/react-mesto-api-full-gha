import { Routes, Route, Link } from "react-router-dom";

function Header({ email, onSignOutClick }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__navigation">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p className="header__user-email">{email}</p>
                <Link
                  className="header__link header__link_dark"
                  to="/sign-in"
                  onClick={onSignOutClick}
                >
                  Sign out
                </Link>
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link className="header__link" to="/sign-up">
                Sign up
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link className="header__link" to="/sign-in">
                Sign in
              </Link>
            }
          />
        </Routes>
      </div>
    </header>
  );
}
export default Header;
