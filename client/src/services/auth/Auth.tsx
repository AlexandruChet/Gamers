import { useState } from "react";
import "./auth.scss";

type AuthProps = {
  isVisible: boolean;
  onClose: () => void;
};

export let passwordValue = "";

const Auth = ({ isVisible, onClose }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  if (!isVisible) return null;

  const toggle = () => setIsLogin((prev) => !prev);

  const validation = (pas: string) => {
    const minLength = 12;
    const errors: string[] = [];

    if (!pas) {
      alert("Password is empty");
      return false;
    }

    if (pas.length < minLength) errors.push("Password is too short");
    if (!/[A-Z]/.test(pas))
      errors.push("Must contain at least one uppercase letter");
    if (!/[a-z]/.test(pas))
      errors.push("Must contain at least one lowercase letter");
    if (!/[0-9]/.test(pas)) errors.push("Must contain at least one digit");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pas))
      errors.push("Must contain at least one special character");

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    } else {
      alert("Password successfully validated!");
      return true;
    }
  };

  const sendingToServer = () => {
  passwordValue = password;
  console.log("Password for export:", passwordValue);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validation(password);
    if (validation(password)) {
      sendingToServer();
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-modal__content">
        <button className="auth-modal__close" onClick={onClose}>
          Close
        </button>

        {isLogin ? (
          <form className="auth-modal__form" onSubmit={handleSubmit}>
            <h1 className="auth-modal__title">Login</h1>
            <h3 className="auth-modal__subtitle">
              Please login using account details below.
            </h3>
            <input
              className="auth-modal__input"
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="auth-modal__input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <form className="auth-modal__form" onSubmit={handleSubmit}>
            <h1 className="auth-modal__title">Create Account</h1>
            <h3 className="auth-modal__subtitle">
              Please provide correct information.
            </h3>
            <input
              className="auth-modal__input"
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="auth-modal__input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
};

export default Auth;
