import React, { useLayoutEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./UI/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { uiActions } from "./store/uiSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();


  useLayoutEffect(() => {
    dispatch(uiActions.windowSize([window.innerWidth, window.innerHeight]));

    function updateSize() {
      dispatch(uiActions.windowSize([window.innerWidth, window.innerHeight]));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [dispatch]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
