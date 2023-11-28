import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/HomePage/WelcomePage";
import ProjectsPage from "../components/ProjectsPage";
import AboutMePage from "../components/AboutMePage";
import ContactPage from "../components/ContactPage";

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
