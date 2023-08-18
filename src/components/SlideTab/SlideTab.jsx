"use client";
import { useState } from "react";

export function SlideTab(props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex gap-x-4">
      <div className="flex">
        <div className={` ${activeTab === 0 ? "border-b border-black" : ""}`}>
          <button onClick={() => handleTabClick(0)}>{props.tabItem1}</button>
        </div>
        <div className={`${activeTab === 1 ? "border-b border-black" : ""}`}>
          <button onClick={() => handleTabClick(1)}>{props.tabItem2}</button>
        </div>
      </div>
    </div>
  );
}
{/* 使い方です <SlideTab tabItem1="作り方" tabItem2="材料"/> */}
