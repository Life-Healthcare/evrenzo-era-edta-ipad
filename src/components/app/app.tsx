import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Screensaver from "@/pages/screensaver/screensaver";
import Home from "@/pages/home/home";

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Screensaver />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}
