import Month from "./month";

export default function Calender() {
  return (
    <div className=" grid bg-slate-700 h-100 grid-cols-4 gap-6 p-2 ">
      <Month monthNumber={12}/>
    </div>
  );
}
