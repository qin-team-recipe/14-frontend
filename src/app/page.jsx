"use client";

import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="basis-1/3 border-r">
        <Sidebar />
      </div>
      <div className="basis-1/3">
        <h2>Hello world</h2>
      </div>
      <div className="w-screen basis-1/3  border-l "></div>
    </div>
  );
}
