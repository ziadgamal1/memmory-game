import "./App.css";
import { useState } from "react";
import { data } from "./assets.js";
import type { DataItem } from "./types/index";
function App() {
  const [start, setStart] = useState<boolean>(false);
  const randomData = data.sort(() => Math.random() - 0.5);
  return (
    <>
      <div className="w-(--width) h-(--height) pb-8 pt-8 border-4 border-black rounded-xl ">
        <div className="grid grid-cols-4 gap-3 grid-rows-3  items-center justify-items-center w-full h-full relative ">
          {randomData.map((item: DataItem) => (
            <div key={item.id} className="w-50 h-fit  ">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-full"
              />
              <span className={`back`}></span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center mt-3">
        <button className="p-3 bg-blue-400  rounded-2xl hover:bg-blue-500 cursor-pointer hover:scale-110 transition-all duration-300">
          Start game
        </button>
        <button className="p-3 bg-orange-400  rounded-2xl hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all duration-300">
          reset
        </button>
      </div>
    </>
  );
}

export default App;
