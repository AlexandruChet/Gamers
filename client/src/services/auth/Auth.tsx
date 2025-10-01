type AuthProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Auth = ({ isVisible, onClose }: AuthProps) => {
  if (!isVisible) return null;

  return (
    <div className="auth-modal">
      <button onClick={onClose}>Close</button>
      <p>Auth content here</p>
    </div>
  );
};

export default Auth;
