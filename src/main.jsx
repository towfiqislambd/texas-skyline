import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TranslationProvider } from "./hooks/TranslationContext";

createRoot(document.getElementById("root")).render(
  <TranslationProvider>
    <div id="google_translate_element" />
    <App />
  </TranslationProvider>
);
