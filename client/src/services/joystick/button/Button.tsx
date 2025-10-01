import Auth from "../../auth/Auth";
import { useState } from "react";
import "./btn.scss"

const Button = () => {
  const [showAuth, setShowAuth] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShowAuth(true)}
        className="btn-auth">BUY NOW →</button>
      <Auth isVisible={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
};

export default Button;
