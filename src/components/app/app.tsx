import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Screensaver from "@/pages/screensaver/screensaver";
import Home from "@/pages/home/home";
import Page from "@/pages/page/page";
import sessionManager from "@/services/session-manager";

export default function App() {
  React.useEffect(() => {
    function onContextMenu(event: MouseEvent) {
      event.preventDefault();
    }

    document.addEventListener("contextmenu", onContextMenu);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  React.useEffect(() => {
    function onResize() {
      document.documentElement.style.setProperty(
        "--device-width",
        String(window.innerWidth)
      );
      document.documentElement.style.setProperty(
        "--device-height",
        String(window.innerHeight)
      );
    }

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    // Send sessions to server every 1 minute
    (async function sendToServer() {
      await sessionManager.sendToServer();
      clearTimeout(timeout);
      timeout = setTimeout(sessionManager.sendToServer, 60000);
    })();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Screensaver />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </React.Suspense>
  );
}
