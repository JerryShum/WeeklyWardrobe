import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonGroup from "./components/ButtonGroup";
import TopBar from "./components/TopBar";
import Worn from "./pages/Worn";
import Expected from "./pages/Expected";
import Recommended from "./pages/Recommendations";
import Upload from "./pages/upload";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="overflow-hidden flex flex-col justify-center items-center rounded-xl border-2 border-black w-2/5 h-[90%] mx-auto bg-white">
        <TopBar></TopBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Worn />} />
            <Route path="/expected" element={<Expected />} />
            <Route path="/recommendations" element={<Recommended />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </BrowserRouter>
        <ButtonGroup></ButtonGroup>
      </div>
    </div>
  );
}

export default App;
