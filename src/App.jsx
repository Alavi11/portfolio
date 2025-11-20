import React from "react";
import Desktop from "./components/Desktop";
import { LanguageProvider } from "./hooks/useLanguage";
import { ThemeProvider, useTheme } from "./hooks/useTheme";

const AppInner = () => {

  return (
      <div className="w-full h-screen overflow-hidden">
          <Desktop />
      </div>
  );
};

const App = () => (
  <LanguageProvider>
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  </LanguageProvider>
);

export default App;
