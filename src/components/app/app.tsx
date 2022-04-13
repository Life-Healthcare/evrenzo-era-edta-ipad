import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Screensaver from "@/pages/screensaver/screensaver";

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Screensaver />} />
      </Routes>
    </React.Suspense>
  );
}
