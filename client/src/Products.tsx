import ModalWindow from "./services/modal-window/ModalWindow.tsx";
import Sidebar from "./services/sidebar/Sidebar.tsx";
import Task from "./services/todo/Todo.tsx";

const Products = () => {
  return (
    <>
      <ModalWindow />
      <Sidebar />
      <Task />
    </>
  );
};

export default Products;
