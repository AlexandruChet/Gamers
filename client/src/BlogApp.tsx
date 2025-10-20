import AboutUS from "./services/about-us/AboutUs";
import Sidebar from "./services/sidebar/Sidebar";

const BlogApp: React.FC = () => {
  return (
    <>
      <Sidebar />
      <AboutUS />
    </>
  );
};

export default BlogApp;
