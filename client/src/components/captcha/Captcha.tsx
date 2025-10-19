import React, { useState, useEffect, useCallback } from "react";
import "./Captcha.scss";

interface CaptchaProps {
  isVisible: boolean;
  onClose: () => void;
}

function randomNumber(len: number): string {
  const chars = "1234567890!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM";
  let randomNum = "";
  for (let i = 0; i < len; i++) {
    randomNum += chars[Math.floor(Math.random() * chars.length)];
  }
  return randomNum;
}

const Captcha: React.FC<CaptchaProps> = ({ isVisible, onClose }) => {
  const [captcha, setCaptcha] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (isVisible) {
      const length = Math.floor(Math.random() * 6) + 4;
      setCaptcha(randomNumber(length));
      setInput("");
      setMessage("");
    }
  }, [isVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === captcha) {
      setMessage("✅ Right");
      setTimeout(() => {
        onClose();
      }, 500);
    } else {
      setMessage("❌ Error!");
      refreshCaptcha();
    }
  };

  const refreshCaptcha = useCallback(() => {
    const length = Math.floor(Math.random() * 6) + 4;
    setCaptcha(randomNumber(length));
    setInput("");
  }, []);

  if (!isVisible) return null;

  return (
    <div className="captcha-modal">
      <div className="captcha-content">
        <h2 className="captcha-title">Enter Captcha</h2>
        <div className="captcha-display">{captcha}</div>
        <form onSubmit={handleSubmit} className="captcha-form">
          <input
            type="text"
            placeholder="Enter Captcha"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="captcha-input"
          />
          <div className="captcha-buttons">
            <button type="submit" className="captcha-submit">
              Submit
            </button>
            <button
              type="button"
              onClick={refreshCaptcha}
              className="captcha-refresh"
            >
              🔄
            </button>
          </div>
        </form>
        {message && <h3 className="captcha-message">{message}</h3>}
      </div>
    </div>
  );
};

export default Captcha;
