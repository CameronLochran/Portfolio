import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/WelcomePage";
import ProjectsPage from "../components/ProjectsPage";
import AboutMePage from "../components/AboutMePage";
import ContactPage from "../components/ContactPage";
import "../css/WelcomePage.css";

const MainContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="contactpage" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default MainContainer;
