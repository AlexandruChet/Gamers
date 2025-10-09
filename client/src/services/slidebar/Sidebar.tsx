import React, { useEffect, useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setIsOpen(true);
      }

      if (event.key === "Escape" || event.key === "ArrowRight") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30%",
          height: "100vh",
          background: "#f0f0f0",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          padding: "20px",
          zIndex: "1000",
        }}
      >
        <ul></ul>
      </aside>
    </div>
  );
};

export default Sidebar;
