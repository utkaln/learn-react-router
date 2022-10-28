import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseParamsEx from "./UseParamsEx";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:id" element={<UseParamsEx />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
