import React, { useState } from "react";
import "./GitHub.scss";

interface GitHubContactProps {
  username: string;
  age?: number;
  country?: string;
  projects?: {
    name: string;
    repo: string;
    alt: string;
  }[];
}

const GitHubContact: React.FC<GitHubContactProps> = ({
  username,
  age = 14,
  country = "Germany",
  projects = [],
}) => {
  const [theme, setTheme] = useState<boolean>(false);

  const toggle = () => setTheme(!theme);

  return (
    <section className={`github-readme ${theme ? "light-theme" : ""}`}>
      <button className="theme-toggle" onClick={toggle}>
        {theme ? "🌙 Dark Theme" : "☀️ Light Theme"}
      </button>

      <div className="typing">
        <img
          src={`https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=00BFFF&center=true&vCenter=true&width=850&height=70&lines=Hi%2C+I'm+${username}!;${age}-year-old+Developer+from+${country};Frontend+Dev+%7C+Future+C%2B%2B+System+Programmer`}
          alt="Typing SVG"
        />
      </div>

      <h1>👋 Welcome!</h1>
      <h3>💻 Young Developer | 🌍 {country} | 🚀 Passionate about Coding</h3>
      <hr />

      <div className="about-section">
        <h2>👨‍💻 About Me</h2>
        <ul>
          <li>✨ {age} years old</li>
          <li>🌍 Based in {country}</li>
          <li>🖥️ Focused on Frontend Development (HTML, CSS, JS, TS, React)</li>
          <li>⚡ Currently learning C++ to become a System Programmer</li>
          <li>🎯 Love creating projects & constantly improving</li>
        </ul>
      </div>

      <hr />
      <h2>🚀 Tech Stack</h2>
      <img
        src="https://skillicons.dev/icons?i=html,css,sass,js,ts,react,nodejs,cpp,git,github,vscode&perline=7"
        alt="Tech Stack"
        className="skills"
      />

      <hr />
      <h2>📂 Featured Projects</h2>
      <div className="projects">
        {projects.length > 0 ? (
          projects.map((project) => (
            <a
              key={project.repo}
              href={`https://github.com/${username}/${project.repo}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${project.repo}&theme=tokyonight&hide_border=true`}
                alt={project.alt}
              />
            </a>
          ))
        ) : (
          <p>No projects added yet ⚙️</p>
        )}
      </div>

      <hr />
      <h2>🏆 Achievements</h2>
      <ul className="achievements">
        <li>✅ Built multiple frontend projects</li>
        <li>⚙️ Learned Node.js & created a file manager</li>
        <li>🎮 Developing games & apps in JS and C++</li>
        <li>📈 Always improving, always learning 🚀</li>
      </ul>

      <img
        src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&row=1&column=6&no-frame=true&no-bg=true`}
        alt="GitHub Trophies"
        className="trophies"
      />

      <hr />
      <h2>🎯 Goals</h2>
      <ul>
        <li>🔹 Become a professional C++ System Programmer</li>
        <li>🔹 Grow as a Frontend & Fullstack Developer</li>
        <li>🔹 Contribute to Open Source & build large projects</li>
      </ul>

      <hr />
      <h2>📊 GitHub Stats</h2>
      <div className="stats">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117`}
          alt="GitHub Stats"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117`}
          alt="Top Languages"
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=tokyonight&hide_border=true&background=0D1117`}
          alt="GitHub Streak"
        />
      </div>

      <hr />
      <h2>📫 Contact Me</h2>
      <div className="contact">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
          />
        </a>
        <a
          href="mailto:chetreanalexandru63@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Email"
          />
        </a>
      </div>

      <h3 className="thanks">✨ Thanks for visiting! ✨</h3>
    </section>
  );
};

export default GitHubContact;
