import ThisGroup from "../components/thisWeek/ThisGroup";
import NextWeekGIGA from "../components/nextWeek/NextWeekGIGA";

function Expected() {
  return (
    <div className="flex flex-col overflow-hidden h-full w-full">
      <h1
        className="flex items-center justify-center p-2 mb-2 font-bold text-5xl
      border-b-2 border-dashed border-black"
      >
        Home
      </h1>
      <div className="  mt-auto mb-auto h-auto overflow-scroll p-5">
        {/* This week*/}
        <div>
          <ThisGroup />
        </div>
        {/* Next week */}
        <div>
          <NextWeekGIGA />
        </div>
      </div>
    </div>
  );
}

export default Expected;
