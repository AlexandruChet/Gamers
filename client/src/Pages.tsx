import WebSitePages from "./services/pages/WebSitePages";
import About from "./services/about/About";

const Pages: React.FC = () => {
  return (
    <>
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
