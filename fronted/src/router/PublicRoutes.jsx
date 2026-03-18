import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Notice from "../pages/Notice";
import Test from "../pages/Test";
import Vacancy from "../pages/Vacancy";
import Contact from "../pages/Contact";
import Academeic from "../pages/Academeic";
import Blog from "../pages/Blog";
import Team from "../pages/Team";
export const PublicRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/notice",
    element: <Notice />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/vacancy",
    element: <Vacancy />,
  },
  {
    path: "/academics",
    element: <Academeic />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/team",
    element: <Team />,
  },
];
export default PublicRoutes;
