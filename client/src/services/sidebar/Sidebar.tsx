import React, { useEffect, useState } from "react";
import magnifyingGlass from "../../assets/images/little-icons/magnifying-glass.svg";
import hearth from "../../assets/images/little-icons/hearth.svg";
import basket from "../../assets/images/little-icons/basket.svg";
import Laptop from "../../assets/images/products/laptop.svg";
import anotherLaptop from "../../assets/images/products/another-laptop.svg";
import LenovoLegion from "../../assets/images/products/LenovoCorei9.svg";
import LenovoLegion5Ryzen from "../../assets/images/products/LenovoLegion5Ryzen.svg";
import LenovoCoreI9 from "../../assets/images/products/LenovoCoreI9.svg";
import "./Sidebar.scss";

interface ProductCardProps {
  name: string;
  brand: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  brand,
  price,
  image,
}) => {
  return (
    <div className="product-card">
      <div className="menu">
        <button>
          <img src={magnifyingGlass} alt="view" />
        </button>
        <button>
          <img src={hearth} alt="favorite" />
        </button>
        <button>
          <img src={basket} alt="basket" />
        </button>
      </div>
      <img src={image} alt={name} className="product-img" />
      <h2>{name}</h2>
      <h3>{brand}</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <p>{price}</p>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") openSidebar();
      if (event.key === "Escape" || event.key === "ArrowRight") closeSidebar();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filters = [
    { title: "Product Brand", items: ["Asus", "Dell", "Lenovo", "HP", "Acer"] },
    {
      title: "Discount Offer",
      items: ["20% Discount Offer", "5% Cashback Offer", "25% Discount Offer"],
    },
    {
      title: "Rating Item",
      items: ["✅ 🌟", "✅ 🌟🌟", "✅ 🌟🌟🌟", "✅ 🌟🌟🌟🌟", "✅ 🌟🌟🌟🌟🌟"],
    },
    {
      title: "Price Filter",
      items: [
        "₹0 - ₹49,990",
        "₹49,990 - ₹99,999",
        "₹99,999 - ₹1,49,999",
        "₹1,49,999+",
      ],
    },
    {
      title: "Features",
      items: [
        "Backlit Keyboard",
        "Full HD Display",
        "MS Office",
        "100% RGB",
        "No Optical Disk Drive",
      ],
    },
  ];

  const products = [
    {
      name: "Asus Vivobook 16",
      brand: "Asus",
      price: "₹79,999",
      image: Laptop,
    },
    {
      name: "Dell XPS 15",
      brand: "Dell",
      price: "₹1,29,999",
      image: anotherLaptop,
    },
    {
      name: "Lenovo Legion 5",
      brand: "Lenovo",
      price: "₹1,09,999",
      image: LenovoLegion,
    },
    {
      name: "HP Envy 14",
      brand: "HP",
      price: "₹94,999",
      image: LenovoLegion5Ryzen,
    },
    {
      name: "Acer Predator Helios",
      brand: "Acer",
      price: "₹1,19,999",
      image: LenovoCoreI9,
    },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <section className="sidebar__content">
        <header className="sidebar__header">
          <div>
            <h3>Laptops</h3>
            <p>About 9,620 results (0.62 seconds)</p>
          </div>
          <textarea defaultValue="Sort at the best price" />
        </header>

        <div className="filters">
          {filters.map((filter, i) => (
            <div key={i} className="filter-block">
              <h1>{filter.title}</h1>
              <ul>
                {filter.items.map((item, j) => (
                  <li key={j}>☑️ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="products-list">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
