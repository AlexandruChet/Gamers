import Auth from "../../auth/Auth";
import { useState } from "react";

const Button = () => {
  const [showAuth, setShowAuth] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShowAuth(true)}>BUY NOW →</button>
      <Auth isVisible={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
};

export default Button;
