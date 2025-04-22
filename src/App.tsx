import "./App.css";
import { LuDelete } from "react-icons/lu";
function App() {
  const divs: any = [];
  for (let i: number = 0; i < 9; i++) {
    divs.push(
      <div
        className="bg-stone-800 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center"
        key={i}
      >
        {" "}
        {i + 1}
      </div>
    );
  }

  return (
    <>
      <div className="w-full  h-screen grid justify-center items-center bg-gradient-to-b from-sky-400 to-blue-800">
        <div className="w-fit h-fit bg-stone-900 rounded-[10px] grid-rows-2 ">
          <div className="h-[100px] w-full p-[10px] rounded-[10px]">
            <p className="text-white">0</p>
          </div>
          <div className="grid grid-cols-[3fr_1fr] cursor-pointer grid-rows-[1fr_4fr] p-[10px]">
            <div className="grid grid-cols-4 gap-x-3 row-1 col-span-2">
              <div className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center ">
                AC
              </div>
              <div className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center ">
                !
              </div>
              <div className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center ">
                %
              </div>
              <div className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center ">
                <LuDelete/>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 row-2 gap-3  justify-center ">
              {divs}
              <div className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center col-1">
                .
              </div>
              <div className="bg-stone-800 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center col-2">
                0
              </div>
              <div className="bg-orange-900 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center col-3">
                =
              </div>
            </div>
            <div className="grid grid-cols-1 row-2 gap-3 ">
              <div className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2">
                -
              </div>
              <div className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2">
                +
              </div>
              <div className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2">
                :
              </div>
              <div className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2">
                x
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
