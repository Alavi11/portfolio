import { BrowserRouter , Routes , Route, Navigate } from "react-router-dom";
import Main from "./layout/Main";
import Me from "./pages/me/Me";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/me"}/>}/>
          <Route path="/me" element={<Main/>}>
              <Route index element={<Me/>}/>
              <Route path="skills" element={<Skills/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
