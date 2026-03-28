import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${pathname}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

export default ScrollToTop;
