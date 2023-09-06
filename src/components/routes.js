import AboutMe from "../pages/AboutMe";
import HomePage from "../pages/HomePage";
import Resume from "../pages/Resume";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/about-me", element: <AboutMe />, id: 2 },
  { path: "/resume", element: <Resume />, id: 3 },
  { path: "/projects", element: <Projects />, id: 4 },
  { path: "/contact", element: <Contact />, id: 5 },
  { path: "*", element: <NotFound />, id: 4 },
];

export default routes;
