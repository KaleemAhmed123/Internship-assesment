import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/banner/Banner";
import Tabs from "./components/tabs/Tabs";
import LoadingBall from "./components/loadingBall/LoadingBall";
import Payments from "./pages/payment/Payments";
import Status from "./pages/status/Status";
import Overview from "./pages/overview/Overview";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // for two sec only on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Banner />
      <Tabs />
      <Routes>
        <Route index element={isLoading ? <LoadingBall /> : <Status />} />
        <Route path="payment" element={<Payments />} />
        <Route path="overview" element={<Overview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
