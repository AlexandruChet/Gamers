import WebSitePages from "./services/pages/WebSitePages";
import About from "./services/about/About";
import Sidebar from "./services/sidebar/Sidebar";

const Pages: React.FC = () => {
  return (
    <>
      <Sidebar />
      <WebSitePages
        FirstLink="Home"
        SecLink="Pages"
        ThirdLink="Products"
        FourthLink="Contact"
        FifthLink="Shop"
        SixthLink="Blog"
      />
      <About />
    </>
  );
};

export default Pages;
