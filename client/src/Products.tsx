import ModalWindow from "./services/modal-window/ModalWindow.tsx";
import Sidebar from "./services/sidebar/Sidebar.tsx";
import Task from "./services/todo/Todo.tsx";
import Product from "./services/productInformation/Product.tsx";

const Products = () => {
  return (
    <>
      <ModalWindow />
      <Sidebar />
      <Product/>
      <Task />
    </>
  );
};

export default Products;
