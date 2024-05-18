import ButtonGroup from "./components/ButtonGroup";
import TopBar from "./components/TopBar";
import WornItem from "./components/WornItem";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center rounded-xl border-2 border-black w-2/5 h-[90%] mx-auto">
        <TopBar></TopBar>
        <div className="mt-auto mb-auto">
          <div className="flex w-full ">
            <WornItem></WornItem>
            <WornItem></WornItem>
          </div>
        </div>
        <ButtonGroup></ButtonGroup>
      </div>
    </div>
  );
}

export default App;
