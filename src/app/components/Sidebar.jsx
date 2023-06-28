import React from "react";
import SidebarMenu from "./SidebarMenu";
import { SearchIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
      {/* ロゴ */}
      <div className=" ">ロゴ</div>
      <div>
        <SidebarMenu text="探す" Icon={SearchIcon} />
        <SidebarMenu text="お気に入り" Icon={HeartIcon} />
        <SidebarMenu text="買い物リスト" Icon={ShoppingBagIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
