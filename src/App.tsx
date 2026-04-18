import { useEffect, useState } from "react";
import Toolbar from "./components/Toolbar";
import BtnBackToTop from "./components/BtnBackToTop";
import data from './data/portfolio.json';
import Footer from "./components/Footer";
import XCenteredLayout from "./components/XCenteredLayout";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import { HR } from "./components/Lines";
import "./styles/App.css";
import Contact from "./components/Contact";

export default function App() {
  const [floatingUIComponents, setFloatingUIComponents] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

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
    localStorage.setItem('theme', theme)
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setFloatingUIComponents(window.scrollY > 120);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Toolbar visible={floatingUIComponents} theme={theme} setTheme={setTheme} />
      <main className="min-h-screen bg-background default-transition text-text font-display">
        <XCenteredLayout herobg={true}>
          <Hero isScrolled={floatingUIComponents} data={data} theme={theme} id="home"/>
        </XCenteredLayout>
        <HR className=""/>
        <XCenteredLayout>
          <Certificates
            data={data.aboutInfo.certifications}
            id="certificates"
          />
        </XCenteredLayout>
          <HR className=""/>
        <XCenteredLayout particles={theme === "dark"}>
          <Contact
            id="contact" data={data.contactinformation} />
        </XCenteredLayout>
      </main>
      <BtnBackToTop visible={floatingUIComponents} />
      <Footer data={data.footerinfo} />
    </>
  )
}