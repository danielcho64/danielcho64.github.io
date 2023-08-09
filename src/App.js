import React, { useState, Suspense, lazy } from "react";
import { NavigationBar } from "./components";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Education = lazy(() => import("./pages/Education/Education"));
const Certifications = lazy(() => import("./pages/Certifications/Certifications"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "certifications":
        return <Certifications />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="App">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Suspense fallback={Loader()}>{renderSwitch(currentTab)}</Suspense>
    </div>
  );
};

export default App;
