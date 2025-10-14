import { useRef, useState } from "react";
import {
  customHookSending,
  customHookValidation,
} from "../../logic/customHooks";
import "./auth.scss";

type AuthProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Auth = ({ isVisible, onClose }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const formRef = useRef<HTMLFormElement | null>(null);

  if (!isVisible) return null;

  const toggle = () => setIsLogin((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = customHookValidation(password);
    if (isValid) {
      const result = await customHookSending(8000, password);
      if (result?.success) {
        alert(result.message || "Password sent to server successfully!");
      } else {
        alert(result?.message || "Error while sending data to server.");
      }
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-modal__content">
        <button className="auth-modal__close" onClick={onClose}>
          Close
        </button>

        <form
          className="auth-modal__form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <h1 className="auth-modal__title">
            {isLogin ? "Login" : "Create Account"}
          </h1>
          <h3 className="auth-modal__subtitle">
            {isLogin
              ? "Please login using account details below."
              : "Please provide correct information."}
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

          {isLogin && (
            <h3 className="auth-modal__forgot">Forgot your password?</h3>
          )}

          <button className="auth-modal__button" type="submit">
            {isLogin ? "Log In" : "Create Account"}
          </button>

          <p className="auth-modal__toggle-text">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              className="auth-modal__toggle-button"
              type="button"
              onClick={toggle}
            >
              {isLogin ? "Create account" : "Log in"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
