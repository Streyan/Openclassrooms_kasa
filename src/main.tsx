import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./pages/Home/index.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import File from "./pages/File/file.tsx";
import About from "./pages/About/about.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Error from "./pages/Error/error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/file/:fileId" element={<File />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
