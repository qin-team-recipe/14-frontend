"use client";

import React from "react";
import SidebarMenu from "./SidebarMenu";
import { IconSearch } from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
      {/* ロゴ */}
      <div className=" ">ロゴ</div>
      <div className="flex">
        <IconSearch />
        <p>探す</p>
      </div>


      <div>
        <SidebarMenu text="探す" Icon={IconSearch} />
        <SidebarMenu text="お気に入り" />
        <SidebarMenu text="買い物リスト" />
      </div>
    </div>
  );
};

export default Sidebar;
