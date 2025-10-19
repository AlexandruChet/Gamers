import Sidebar from "./services/sidebar/Sidebar";
import About from "./services/about/About";
import GitHubContact from "./services/github-contact/GitHub";

const Contact: React.FC = () => {
  return (
    <>
      <Sidebar />
      <GitHubContact
        username="AlexandruChet"
        age={14}
        country="Germany"
        projects={[
          { name: "WebSite", repo: "WebSite", alt: "Website" },
          { name: "TicTacToe", repo: "TicTacToe", alt: "TicTacToe" },
          { name: "File Manager", repo: "File-Manager", alt: "File Manager" },
        ]}
      />

      <About />
    </>
  );
};

export default Contact;
