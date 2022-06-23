import "./App.css";
import ReadForm from "./ReadForm";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllNotes from "./AllNotes";

function App() {
  return (
    <div className="App bg-dark text-light">
      <Navbar className="" />
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<ReadForm />} />
          <Route path="/all" element={<AllNotes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
