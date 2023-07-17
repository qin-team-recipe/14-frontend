import React from "react";

const SidebarMenu = ({ text, Icon }) => {
  return (
    <div className="flex items-center justify-end">
      <Icon className="h-7 hidden lg:inline" />
      <span className="hidden lg:inline">{text}</span>
    </div>
  );
};

export default SidebarMenu;
