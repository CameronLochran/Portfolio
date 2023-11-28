import React from "react";
import "./WelcomePage.css";

const Home = () => {
  return (
    <>
      <title>Cameron Lochran</title>
      <div className="home-page-container"></div>
      <center>
        <header>
          <h1>Welcome!</h1>
          <h2>What would you like to see first of me?</h2>
        </header>

        <h3>
          <a href="https://www.linkedin.com/in/cameron-lochran-371610234/">
            My LinkedIn,
          </a>
          <br />
        </h3>
        <h3>
          <a href="/projects">Projects, </a>
          <br />
        </h3>
        <h3>
          <a href="/aboutme">About Me </a>
          <br />
        </h3>
        <h3>&</h3>
        <h3>
          <a href="/contactpage">Ways To Contact Me</a>
          <br />
        </h3>
      </center>
    </>
  );
};

export default Home;
