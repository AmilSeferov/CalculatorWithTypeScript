import { useState } from "react";
import "./App.css";
import { LuDelete } from "react-icons/lu";
function App() {
  const divs: any = [];
  const [value, setvalue] = useState<string>("0");
  const [oldcalc, setOldcalc] = useState<string>("");
  const regex: RegExp = /[=\-\+\*\.\%]$/;
  for (let i: number = 0; i < 9; i++) {
    divs.push(
      <div 
        onClick={() => {
          if (value === "0") {
            setvalue(`${i + 1}`);
          } else {
            setvalue(value + (i + 1));
          }
        }}
        className="bg-stone-800 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center shadow-2xs shadow-stone-500 hover:shadow-stone-800 "
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
        <div className="p-[10px] bg-gradient-to-b from-gray-700 to-gray-500 rounded-[10px] border-[1px] border-gray-800">
          <div className="w-fit h-fit bg-stone-900 rounded-[10px] grid-rows-2 ">
            <div className="h-[100px] w-full p-[10px] rounded-[10px] grid justify-end items-end">
              <p
                className={
                  oldcalc ? "text-stone-400  grid justify-end" : "hidden"
                }
              >
                {oldcalc}
              </p>
              <p
                className={
                  oldcalc
                    ? "text-stone-400 text-end grid justify-end"
                    : "hidden"
                }
              >
                =
              </p>

              <p className="text-white text-end">{value}</p>
            </div>
            <div className="grid grid-cols-[3fr_1fr] cursor-pointer grid-rows-[1fr_4fr] p-[10px]">
              <div className="grid grid-cols-4 gap-x-3 row-1 col-span-2">
                <div
                  onClick={() => {
                    setvalue("0");
                    setOldcalc("");
                  }}
                  className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center "
                >
                  AC
                </div>
                <div
                  onClick={() => {
                    if( !regex.test(value)){ 

                    setvalue(value + "!");
                  }
                  }}
                  className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center "
                >
                  !
                </div>
                <div
                  onClick={() => {
                    if (!regex.test(value)) {
                      setvalue(value + "%");
                    }
                  }}
                  className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center "
                >
                  %
                </div>
                <div
                  onClick={() => {
                    if (value.length !== 1) {
                      setvalue(value.slice(0, -1));
                    } else {
                      setvalue("0");
                    }
                  }}
                  className="bg-orange-600 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center "
                >
                  <LuDelete />
                </div>
              </div>
              <div className="w-full grid grid-cols-3 row-2 gap-3  justify-center ">
                {divs}
                <div
                  onClick={() => {
                    if (!regex.test(value)) {
                      setvalue(value + ".");
                    }
                  }}
                  className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center col-1 "
                >
                  .
                </div>
                <div
                  onClick={() => {
                    if (value === "0") {
                      setvalue("0");
                    } else {
                      setvalue(value + "0");
                    }
                  }}
                  className="bg-stone-800 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center col-2 shadow-2xs shadow-stone-500 hover:shadow-stone-800 "
                >
                  0
                </div>
                <div
                  onClick={() => {
                    setOldcalc(value);
                    let j: number = 0;
                    for (let i: number = 0; i < 10; i++) {
                      if (
                        value[i] === "-" ||
                        value[i] === "*" ||
                        value[i] === "+" ||
                        value[i] === "%" ||
                        value[i] === "/"
                      ) {
                        j = i + 1;
                      }

                      value[i] === "!" && console.log(value.slice(j, i));
                      if (value[i] === "!") {
                        let num:number=1
                        console.log(Number(value.slice(j, i)))
                        for(let k:number=1;k <= Number(value.slice(j, i));k++ ){
                          num=num*k 
                         
                        }
                        setvalue(value.slice(0, j) + `${num}` + value.slice(i + 1));
                      }
                    }
                    if (regex.test(value)) {
                      setvalue(`${eval(value.slice(0, -1))}`);
                    } else {
                      setvalue(`${eval(value)}`);
                    }
                  }}
                  className="bg-orange-900 w-[55px] h-[30px] rounded-full text-white grid justify-center items-center col-3"
                >
                  =
                </div>
              </div>
              <div className="grid grid-cols-1 row-2 gap-3 ">
                <div
                  onClick={() => {
                    if (value !== "0" && !regex.test(value)) {
                      setvalue(value + "-");
                    }
                  }}
                  className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2"
                >
                  -
                </div>
                <div
                  onClick={() => {
                    if (value !== "0" && !regex.test(value)) {
                      setvalue(value + "+");
                    }
                  }}
                  className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2"
                >
                  +
                </div>
                <div
                  onClick={() => {
                    if (value !== "0" && !regex.test(value)) {
                      setvalue(value + "/");
                    }
                  }}
                  className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2"
                >
                  /
                </div>
                <div
                  onClick={() => {
                    if (value !== "0" && !regex.test(value)) {
                      setvalue(value + "*");
                    }
                  }}
                  className="bg-orange-500 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2"
                >
                  *
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
