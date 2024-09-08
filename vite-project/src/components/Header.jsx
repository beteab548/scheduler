import clockImage from "../assets/clock-image.avif";
export default function Header() {
  return (
    <div className="flex content-center  h-32">
      <div className="w-80 h-img-height ml-custom-px ">
        <img className="p-6 ml-20 h-28  " src={clockImage} alt="" />
        <p className="font-semibold mb-44 ml-10 pl-10 -mt-3">
          welcome to <span className="font-bold text-cyan-600">scheduler</span>
        </p>
      </div>
    </div>
  );
}
