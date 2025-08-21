import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./layout/Main";
import Me from "./pages/me/Me";
import Skills from "./pages/skills/Skills";
import ExMain from "./pages/experiences/main";
import Projects from "./pages/projects/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/me"} />} />
          <Route path="/me" element={<Main />}>
            <Route index element={<Me />} />
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<ExMain />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
