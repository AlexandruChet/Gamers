import About from "./services/about/About";
import Shop from "./services/shop/Shop";
import ShopInfo from "./services/shop/shopInfo/ShopInfo";
import Sidebar from "./services/sidebar/Sidebar";

const Shopping = () => {
  return (
    <>
      <Shop />
      <Sidebar />
      <ShopInfo />
      <About />
    </>
  );
};

export default Shopping;
