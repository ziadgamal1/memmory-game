import "./App.css";
import { useState } from "react";
function App() {
  const [start, setStart] = useState(false);
  return (
    <>
      <canvas className="w-(--width) h-(--height) border-4 border-black rounded-xl "></canvas>
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
