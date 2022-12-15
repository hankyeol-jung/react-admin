import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [menuName, setMenuName] = useState([
    "대시보드",
    "디자인 모드",
    "사용자 관리",
    "쇼핑",
    "예약",
    "콘텐츠 관리",
    "App 신청 및 관리",
    "통계",
  ]);

  return (
    <div className="App">
      <div className="fixed w-64 h-screen bg-gray-800 shadow-md shadow-gray-800">
        <div className="flex items-center justify-start px-6 mb-2 text-2xl font-bold text-gray-100 border-b border-gray-500 h-14">
          ADMIN
        </div>
        <div className="flex flex-col justify-between h-[calc(100%_-_4rem)]">
          <div>
            {menuName.map((a, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  className="flex items-center justify-start w-full px-6 text-sm font-medium text-gray-300 transition h-11 hover:bg-sky-400 hover:text-gray-100"
                >
                  {a}
                </button>
              );
            })}
          </div>
          <div>
            <button className="flex items-center justify-start w-full h-16 px-6 text-sm font-medium text-gray-300 bg-slate-900">
              관리자
            </button>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%_-_16rem)] ml-64">
        <p className="">ddkdkdkdk</p>
      </div>
    </div>
  );
}

export default App;
