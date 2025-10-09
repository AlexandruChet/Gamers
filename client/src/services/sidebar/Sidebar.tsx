import React, { useEffect, useState } from "react";
import magnifyingGlass from "../../assets/images/little-icons/magnifying-glass.svg";
import hearth from "../../assets/images/little-icons/hearth.svg";
import basket from "../../assets/images/little-icons/basket.svg";

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
                <div>
                  <h1>Product Brand</h1>
                  <div>
                    <ul>
                      <li>Asus</li>
                      <li>Dell</li>
                      <li>Lenovo</li>
                      <li>HP</li>
                      <li>Acer</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1>Discount Offer</h1>
                  <div>
                    <ul>
                      <li>20% Discount Offer</li>
                      <li>5% Cashback Offer</li>
                      <li>25% Discount Offer</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1>Rating Item</h1>
                  <div>
                    <ul>
                      <li>✅ 🌟</li>
                      <li>✅ 🌟🌟</li>
                      <li>✅ 🌟🌟🌟</li>
                      <li>✅ 🌟🌟🌟🌟</li>
                      <li>✅ 🌟🌟🌟🌟🌟</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1>Price Filter</h1>
                  <div>
                    <ul>
                      <li>☑️ ₹0 - ₹49,990</li>
                      <li>☑️ ₹49,990 - ₹99,999</li>
                      <li>☑️ ₹99,999 - ₹1,49,999</li>
                      <li>☑️ ₹1,49,999+</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1>Features</h1>
                  <div>
                    <ul>
                      <li>☑️ Backlit Keyboard</li>
                      <li>☑️ Full HD Display</li>
                      <li>☑️ MS Office</li>
                      <li>☑️ 100% RGB</li>
                      <li>☑️ No Optical Disk Drive</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="menu">
                  <a>
                    <img src={magnifyingGlass} alt="" />
                  </a>
                  <a>
                    <img src={hearth} alt="" />
                  </a>
                  <a>
                    <img src={basket} alt="" />
                  </a>
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
                  <a>
                    <img src={magnifyingGlass} alt="" />
                  </a>
                  <a>
                    <img src={hearth} alt="" />
                  </a>
                  <a>
                    <img src={basket} alt="" />
                  </a>
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
                  <a>
                    <img src={magnifyingGlass} alt="" />
                  </a>
                  <a>
                    <img src={hearth} alt="" />
                  </a>
                  <a>
                    <img src={basket} alt="" />
                  </a>
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
                  <a>
                    <img src={magnifyingGlass} alt="" />
                  </a>
                  <a>
                    <img src={hearth} alt="" />
                  </a>
                  <a>
                    <img src={basket} alt="" />
                  </a>
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
                  <a>
                    <img src={magnifyingGlass} alt="" />
                  </a>
                  <a>
                    <img src={hearth} alt="" />
                  </a>
                  <a>
                    <img src={basket} alt="" />
                  </a>
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
