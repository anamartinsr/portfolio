import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
