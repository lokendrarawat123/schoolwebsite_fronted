import About from "../pages/About";
import Home from "../pages/Home";
import Notice from "../pages/Notice";
import Test from "../pages/Test";
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
];
export default PublicRoutes;
