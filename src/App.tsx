import { useEffect, useRef, useState } from "react";
import Toolbar from "./components/Toolbar";
import BtnBackToTop from "./components/BtnBackToTop";
import data from "./data/portfolio.json";
import Footer from "./components/Footer";
import XCenteredLayout from "./components/XCenteredLayout";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import { HR } from "./components/Lines";
import "./styles/App.css";
import Contact from "./components/Contact";
import { Projects, ProjectsIconBar } from "./components/Projects";
import { useInView } from "framer-motion";
import { Bounce, ToastContainer } from "react-toastify";

export default function App() {
  const [floatingUIComponents, setFloatingUIComponents] =
    useState<boolean>(false);
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme"));

  const projectIconBarShowTriggerRef = useRef<Element>(null);
  const projectIconBarShowTriggerRefInView = useInView(
    projectIconBarShowTriggerRef,
    { once: false },
  );
  const personalProjectIconBarShowTriggerRef = useRef<Element>(null);
  const personalProjectIconBarShowTriggerRefInView = useInView(
    personalProjectIconBarShowTriggerRef,
    { once: false },
  );

  const [projectsIndex, setProjectsIndex] = useState(0);
  const [personalProjectsIndex, setPersonalProjectsIndex] = useState(0);
  const activeSection = projectIconBarShowTriggerRefInView
    ? "projects"
    : personalProjectIconBarShowTriggerRefInView
      ? "personal"
      : null;

  useEffect(() => {
    document.title = "FVJ Portfolio";
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (theme === "dark") {
      document.documentElement.style.backgroundColor = "#090000";
    } else {
      document.documentElement.style.backgroundColor = "#f7f7f1";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll: () => void = () =>
      setFloatingUIComponents(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  type PortfolioSection = {
    type?: "hr";
    Component?: React.ComponentType<any>;
    props?: Record<string, any>;
    layoutProps?: Record<string, any>;
  };

  const projectsData = [...data.projects, ...data.personalProjects];

  const portfolioSections: PortfolioSection[] = [
    {
      Component: Hero,
      props: { isScrolled: floatingUIComponents, data, theme, id: "home" },
      layoutProps: { herobg: true },
    },
    {
      Component: Projects,
      props: {
        data: projectsData,
        header: "Projects",
        id: "projects",
        projectIconBarShowTriggerRef,
        selectedIndex: projectsIndex,
      },
    },
    // {
    //   Component: Projects,
    //   props: {
    //     data: data.personalProjects,
    //     header: "Personal Projects",
    //     id: "personalprojects",
    //     projectIconBarShowTriggerRef: personalProjectIconBarShowTriggerRef,
    //     selectedIndex: personalProjectsIndex,
    //   },
    // },
    { type: "hr" },
    {
      Component: Certificates,
      props: { data: data.aboutInfo.certifications, id: "certificates" },
    },
    { type: "hr" },
    {
      Component: Contact,
      props: { id: "contact", data: data.contactinformation },
      layoutProps: { particles: theme === "dark" },
    },
  ];

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
      <Toolbar
        visible={floatingUIComponents}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="min-h-screen bg-background default-transition text-text font-display">
        {portfolioSections.map((s, i) => {
          if (s.type === "hr") return <HR key={i} className="bg-transparent" />;
          const { Component, props, layoutProps } = s;
          return (
            <XCenteredLayout {...layoutProps}>
              <Component {...props} />
            </XCenteredLayout>
          );
        })}
      </main>
      <BtnBackToTop visible={floatingUIComponents} />
      <Footer data={data.footerinfo} />
      <ProjectsIconBar
        // data={
        //   activeSection === "projects"
        //     ? data.projects
        //     : activeSection === "personal"
        //       ? data.personalProjects
        //       : []
        // }
        data={projectsData}
        selectedIndex={
          activeSection === "projects" ? projectsIndex : personalProjectsIndex
        }
        onSelect={
          activeSection === "projects"
            ? setProjectsIndex
            : setPersonalProjectsIndex
        }
        visible={!!activeSection}
      />
    </>
  );
}
