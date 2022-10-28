import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import AnotherPage from "./AnotherPage";
import Home from "./Home";
import ErrorPage from "./Error";
import NestedHome from "./NestedHome";

function App() {
  return (
    <BrowserRouter>
      <nav>Navigation Bar</nav>
      <Routes>
        <Route path="/" element={<NestedHome />}>
          <Route path="/about" element={<About />} />
          <Route path="/another" element={<AnotherPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <footer>This is a Footer</footer>
    </BrowserRouter>
  );
}

export default App;
