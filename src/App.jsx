import ButtonGroup from "./components/ButtonGroup";
import TopBar from "./components/TopBar";
import ClotheItem from "./components/ClotheItem";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center rounded-xl border-2 border-black w-2/5 h-[90%] mx-auto">
        <TopBar></TopBar>
        <div className="mt-auto mb-auto">
          <ClotheItem></ClotheItem>
        </div>
        <ButtonGroup></ButtonGroup>
      </div>
    </div>
  );
}

export default App;
