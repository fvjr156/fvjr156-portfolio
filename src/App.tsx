import "./styles/App.css";
import data from "./data/portfolio.json";
import { HashRouter, Route, Routes } from "react-router-dom";
import TailwindTest from "./pages/TailwindTest";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState<string | null>(
    () => (localStorage.getItem("websiteThemeMode")) ?? "dark",
  );
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.style.backgroundColor = theme === "dark" ? "#090000" : "#f7f7f1";

    localStorage.setItem("websiteThemeMode", theme!);
  }, [theme]);
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/my-portfolio/"
          element={<MainPage theme={theme} setTheme={setTheme} />}
        />
        <Route path="/my-portfolio/tailwind-test" element={<TailwindTest />} />
        <Route
          path="/my-portfolio/projects/"
          element={
            <ProjectsPage
              projects={[...data.projects, ...data.personalProjects]}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}
