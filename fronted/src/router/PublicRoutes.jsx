import About from "../pages/About";
import Home from "../pages/Home";
export const PublicRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
export default PublicRoutes;
