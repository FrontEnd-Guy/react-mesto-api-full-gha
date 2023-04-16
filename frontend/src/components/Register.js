import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

export function Register({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const formData = {
        email,
        password,
      };
      onSubmit(formData);
    },
    [email, password, onSubmit]
  );

  return (
    <main className="login">
      <div className="login__container">
        <h2 className="login__title">Sign up</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__inputs">
            <input
              id="email"
              name="email"
              className="login__input"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              name="password"
              className="login__input"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login__submit">
            Sign up
          </button>
        </form>
        <span className="login__link-text">
          Already a user?{" "}
          <Link to="/sign-in" className="login__link">
            Sign in
          </Link>
        </span>
      </div>
    </main>
  );
}
