import AboutUS from "./services/about-us/AboutUs";
import Sidebar from "./services/sidebar/Sidebar";
import Blog from "./services/blog/Blog";
import About from "./services/about/About";

const BlogApp: React.FC = () => {
  return (
    <>
      <Sidebar />
      <AboutUS />
      <Blog />
      <About />
    </>
  );
};

export default BlogApp;
