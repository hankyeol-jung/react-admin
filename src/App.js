import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
        <header className="flex items-center justify-between w-full shadow-md px-7 h-14">
          <button
            type="button"
            className="ml-2 text-lg font-medium text-gray-800"
          >
            홈페이지 이름
          </button>
          <div>
            <button className="px-6 py-2 border border-gray-300 border-solid rounded-sm">
              미리보기
            </button>
            <button className="px-6 py-2 ml-2 border border-gray-300 border-solid rounded-sm">
              나가기
            </button>
          </div>
        </header>
        <div className="flex justify-between w-full py-6 bg-neutral-100 px-7">
          <div className="w-[calc(100%_-_23.9375rem)]">
            <div className="bg-white shadow-sm">
              <div className="">방문자 요약</div>
              <div className="">사이트 요약</div>
            </div>
          </div>

          <div className="w-[21.4375rem] ml-10">
            <div class="bg-zinc-700 pt-7 mb-6 shadow-sm">
              <div>
                <p className="text-base font-medium text-white">관리자</p>
                <p className="text-sm font-medium text-neutral-400">
                  whd6023@naver.com
                </p>
              </div>
              <div className="border-b p-7 border-neutral-600">
                <div className="flex items-center justify-between h-6 mb-2">
                  <div className="flex items-center">
                    <p className="w-16 text-sm font-medium text-left text-neutral-400">
                      사용버전
                    </p>
                    <span className="h-full px-3 text-sm font-medium text-white block rounded-full bg-[#8595AC]">
                      global
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600"
                  >
                    업그레이드
                  </button>
                </div>
                <div className="flex items-center justify-between h-6 mb-2">
                  <div className="flex items-center">
                    <p className="w-16 text-sm font-medium text-left text-neutral-400">
                      만료일
                    </p>
                    <p className="text-sm font-medium text-white">
                      2019-07-02(512일 남음)
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600"
                  >
                    연장
                  </button>
                </div>
                <div className="flex items-center justify-between h-6">
                  <div className="flex items-center">
                    <p className="w-16 text-sm font-medium text-left text-neutral-400">
                      PG
                    </p>
                    <p className="text-sm font-medium text-white">미가입</p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-neutral-400"
                  >
                    설정
                  </button>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between h-6 mb-2">
                  <div className="flex items-center">
                    <p className="w-16 text-sm font-medium text-left text-neutral-400">
                      APP
                    </p>
                    <p className="text-sm font-medium text-white">
                      iOS 미사용 / Android 미사용
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600"
                  >
                    설정
                  </button>
                </div>
                <div className="flex items-center justify-between h-6 mb-2">
                  <div className="flex items-center">
                    <p className="w-16 text-sm font-medium text-left text-neutral-400">
                      도메인
                    </p>
                    <p className="text-sm font-medium text-white">
                      기본 도메인 사용 중
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600"
                  >
                    설정
                  </button>
                </div>
                <div className="flex items-center justify-between h-6 mb-2">
                  <div className="flex items-center">
                    <p className="w-16 text-sm font-medium text-left text-neutral-400">
                      SSL
                    </p>
                    <p className="text-sm font-medium text-white">
                      사용 (기본 도메인 자동 적용)
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600"
                  >
                    연장
                  </button>
                </div>
                <div className="flex items-center justify-between h-6">
                  <div className="flex items-center">
                    <p className="w-16 text-sm font-medium text-left text-neutral-400">
                      SMS
                    </p>
                    <p className="text-sm font-medium text-white">0건</p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600"
                  >
                    충전
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-6 bg-white shadow-sm p-7">
              <div class="flex items-start justify-between mb-6">
                <p className="text-base text-medium text-neutral-900">
                  운영진 설정
                </p>
                <button className="text-sm text-medium text-neutral-500">
                  관리
                </button>
              </div>
              <div className="flex items-center justify-start text-2xl text-neutral-500">
                <span className="flex items-center justify-center w-10 h-10 ml-2 rounded-full bg-neutral-200 first:ml-0 ">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="flex items-center justify-center w-10 h-10 ml-2 rounded-full bg-neutral-200 first:ml-0 ">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
