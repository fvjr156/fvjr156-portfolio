import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-portfolio/" element={<MainPage />} />
        <Route
          path="/my-portfolio/projects/"
          element={<ProjectsPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
