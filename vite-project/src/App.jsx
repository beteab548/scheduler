import clockImage from "./assets/clock-image.avif";
import "./App.css";

function App() {
  return (
    <div className="flex-col content-center  h-screen w-screen">
      <div className="w-80 h-80 grid ml-custom-px mb-80 ">
        <img className="p-6 mt-4 ml-20 h-28  " src={clockImage} alt="" />
        <p className="font-semibold mb-44 ml-10 pl-10">
          welcome to <span className="font-bold text-cyan-600">scheduler</span>
        </p>
      </div>
    </div>
  );
}
export default App;
