import ShopGroup from "../components/recommended/ShopGroup";

function Recommendations() {
  return (
    <div className="flex flex-col overflow-hidden h-full w-full">
      <h1
        className="flex items-center justify-center p-2 mb-2 font-bold text-5xl
      border-b-2 border-dashed border-black"
      >
        Recommendations
      </h1>

      <div className="mt-auto mb-auto h-auto overflow-scroll p-5 flex flex-col gap-12">
        <ShopGroup Category="meow" />
        <ShopGroup Category="meow" />
        <ShopGroup Category="meow" />
        <ShopGroup Category="meow" />
      </div>
    </div>
  );
}

export default Recommendations;
