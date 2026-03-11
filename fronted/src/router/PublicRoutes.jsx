import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Notice from "../pages/Notice";
import Test from "../pages/Test";
import Vacancy from "../pages/Vacancy";
import Contact from "../pages/Contact";
import Academeic from "../pages/Academeic";
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
];
export default PublicRoutes;
