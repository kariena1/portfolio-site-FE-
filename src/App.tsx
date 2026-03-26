import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage"; // "./pages/AboutPage";
import ProjectsPage from "../src/pages/ProjectsPage"; // "./pages/ProjectsPage";
import ProjectDetailPage from "../src/pages/ProjectDetailPage"; // "./pages/ProjectDetailPage";
import ContactPage from "../src/pages/ContactPage"; // "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
