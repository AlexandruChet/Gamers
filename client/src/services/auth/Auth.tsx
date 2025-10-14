import { useState, useRef } from "react";
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

  const sendingToServer = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/submit-password", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ password }),
      });

      if (!response.ok) throw new Error("Failed to send password");
      alert("Password sent to server successfully!");
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unknown error:", err);
      }
      alert("Error while sending data to server.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validation(password);
    if (isValid) {
      sendingToServer();
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
