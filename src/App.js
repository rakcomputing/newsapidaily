import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import TaksApp from "./page/Taks/Taks";
import LayoutPage from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="home" element={<Home />} />
          <Route path="alltasks" element={<TaksApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
