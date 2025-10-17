import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SearchCheckingRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        navigate("/");
      }
    };

    // first time check
    if (window.innerWidth >= 1024) {
      navigate("/");
    } else {
      setLoading(false);
    }

    // resize event listener added
    window.addEventListener("resize", handleResize);

    // cleanup function: remove listener when component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate]);

  if (loading) {
    return <span>Loading...</span>;
  }

  return children;
};

export default SearchCheckingRoute;
