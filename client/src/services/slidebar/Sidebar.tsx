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
          width: "100%",
          height: "100vh",
          background: "#f0f0f0",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          padding: "20px",
          zIndex: "1000",
        }}
      >
        <section>
          <div>
            <div>
              <h3>Laptops</h3>
              <p>About 9,620 results (0.62 seconds)</p>
            </div>
            <div>
              <div>
                <textarea name="" id="">
                  Sort at the best price
                </textarea>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="products">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div className="menu">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <img src="" alt="" />
                <div>
                  <h1></h1>
                  <h3></h3>
                  <div className="stars"></div>
                  <p></p>
                </div>
              </div>
              <div>
                <div className="menu">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <img src="" alt="" />
                <div>
                  <h1></h1>
                  <h3></h3>
                  <div className="stars"></div>
                  <p></p>
                </div>
              </div>
              <div>
                <div className="menu">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <img src="" alt="" />
                <div>
                  <h1></h1>
                  <h3></h3>
                  <div className="stars"></div>
                  <p></p>
                </div>
              </div>
              <div>
                <div className="menu">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <img src="" alt="" />
                <div>
                  <h1></h1>
                  <h3></h3>
                  <div className="stars"></div>
                  <p></p>
                </div>
              </div>
              <div>
                <div className="menu">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <img src="" alt="" />
                <div>
                  <h1></h1>
                  <h3></h3>
                  <div className="stars"></div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default Sidebar;
