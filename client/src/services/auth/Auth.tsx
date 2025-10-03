import { useState } from "react";
import "./auth.scss"

type AuthProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Auth = ({ isVisible, onClose }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  if (!isVisible) return null;

  const toggle = () => setIsLogin((e) => !e);

  return (
    <div className="auth-modal">
      <button className="auth-modal__close" onClick={onClose}>
        Close
      </button>

      {isLogin ? (
        <form className="auth-modal__form auth-modal__form--login">
          <h1 className="auth-modal__title">Login</h1>
          <h3 className="auth-modal__subtitle">
            Please login using account details below.
          </h3>
          <input
            className="auth-modal__input"
            type="text"
            placeholder="Email Address"
            name="email"
          />
          <input
            className="auth-modal__input"
            type="password"
            placeholder="Password"
            name="password"
          />
          <h3 className="auth-modal__forgot">Forgot your password?</h3>
          <button className="auth-modal__button" type="submit">
            Log In
          </button>
          <p className="auth-modal__toggle-text">
            Don’t have an account?{" "}
            <button
              className="auth-modal__toggle-button"
              type="button"
              onClick={toggle}
            >
              Create account
            </button>
          </p>
        </form>
      ) : (
        <form className="auth-modal__form auth-modal__form--signup">
          <h1 className="auth-modal__title">Create Account</h1>
          <h3 className="auth-modal__subtitle">
            Please provide correct information.
          </h3>
          <input
            className="auth-modal__input"
            type="text"
            placeholder="Email Address"
            name="email"
          />
          <input
            className="auth-modal__input"
            type="password"
            placeholder="Password"
            name="password"
          />
          <button className="auth-modal__button" type="submit">
            Create Account
          </button>
          <p className="auth-modal__toggle-text">
            Already have an account?{" "}
            <button
              className="auth-modal__toggle-button"
              type="button"
              onClick={toggle}
            >
              Log in
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default Auth;
