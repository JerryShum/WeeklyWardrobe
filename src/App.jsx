import ButtonGroup from "./components/ButtonGroup";
import TopBar from "./components/TopBar";
import WornGrid from "./components/WornGrid";
import WornItem from "./components/WornItem";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="overflow-hidden flex flex-col justify-center items-center rounded-xl border-2 border-black w-2/5 h-[90%] mx-auto">
        <h1 className="flex items-center justify-center p-2 mt-5 font-bold text-5xl">
          Weekly Wardrobe
        </h1>
        <TopBar></TopBar>
        <div className=" border-t-2 border-dashed border-black mt-auto mb-auto h-auto overflow-scroll p-5">
          <WornGrid />
        </div>
        <ButtonGroup></ButtonGroup>
      </div>
    </div>
  );
}

export default App;
