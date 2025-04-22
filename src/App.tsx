import "./App.css";

function App() {
  const divs: any = [];
  for (let i: number = 0; i < 9; i++) {
    divs.push(
      <div
        className="bg-stone-800 w-[55px] h-[30px] rounded-full text-white grid justify-center"
        key={i}
      >
        {" "}
        {i + 1}
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-screen grid justify-center items-center bg-gradient-to-b from-sky-400 to-blue-800">
        <div className="w-fit h-fit bg-stone-900 rounded-[10px] grid-rows-2 ">
          <div className="h-[100px] w-full p-[10px] rounded-[10px]"></div>
          <div className="grid grid-cols-2">
            <div className="w-full grid grid-cols-3 gap-3 p-[10px] justify-center ">
              {divs}
              <div className="bg-stone-800 w-[55px] h-[30px] rounded-full text-white grid justify-center col-2">0</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
