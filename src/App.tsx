import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { FloatingCTA, Footer, Nav } from "@/components/chrome";
import Home from "@/pages/Home";
import Architect from "@/pages/Architect";
import ClarityOS from "@/pages/ClarityOS";
import Advisory from "@/pages/Advisory";
import Frameworks from "@/pages/Frameworks";
import Media from "@/pages/Media";
import Memoir from "@/pages/Memoir";
import Dispatch from "@/pages/Dispatch";
import Connect from "@/pages/Connect";

const TITLES: Record<string, string> = {
  "/": "Zeeshan Sabri, Crisis-to-Clarity Architect | ClarityOS",
  "/architect": "The Architect: Zeeshan Sabri's Origin Story",
  "/clarityos": "ClarityOS: The Human OS Before The System OS",
  "/advisory": "Advisory and Speaking | Zeeshan Sabri",
  "/frameworks": "Transformation Frameworks | Zeeshan Sabri",
  "/media": "Media | Zeeshan Sabri",
  "/memoir": "The Memoir: From Exile to Transformation Architect",
  "/dispatch": "The Clarity Dispatch | Zeeshan Sabri",
  "/connect": "Connect | Zeeshan Sabri",
};

function ScrollAndTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLES[pathname] ?? TITLES["/"];
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-void text-dawn">
      <ScrollAndTitle />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architect" element={<Architect />} />
          <Route path="/clarityos" element={<ClarityOS />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/media" element={<Media />} />
          <Route path="/memoir" element={<Memoir />} />
          <Route path="/dispatch" element={<Dispatch />} />
          <Route path="/dispatch/:slug" element={<Dispatch />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
