import React from "react";
import About from "./subpages/about";
import Links from "./subpages/links";
import Articles from "./subpages/articles";
import Projects from "./subpages/projects";
import Interests from "./subpages/interests";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hisham Haque</h2>
        <p>Software Engineer - Google</p>
      </header>

      <section id="about">
        <h2>About</h2>
        <About />
      </section>

      <section id="contact">
        <h2>Contact & Links</h2>
        <Links />
      </section>

      <section id="articles">
        <h2>Articles</h2>
        <Articles />
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <Projects />
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <Interests />
      </section>
    </div>
  );
}

export default App;
