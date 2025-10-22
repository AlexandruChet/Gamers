import ModalWindow from "./services/modal-window/ModalWindow.tsx";
import Sidebar from "./services/sidebar/Sidebar.tsx";
import Task from "./services/todo/Todo.tsx";
import Product from "./services/productInformation/Product.tsx";
import CardSearch from "./services/propsCards/CardsSearch.tsx";
import PropsAbout from "./services/props-about-products/PropsAbout.tsx";

const Products = () => {
  return (
    <>
      <ModalWindow />
      <Sidebar />
      <Product />
      <Task />
      <CardSearch />
      <PropsAbout/>
    </>
  );
};

export default Products;
