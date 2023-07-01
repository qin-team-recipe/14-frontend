import React from "react";

const SidebarMenu = ({ text }) => {
  return (
    <div className="flex items-center justify-end">
      <span className="hidden lg:inline">{text}</span>
    </div>
  );
};

export default SidebarMenu;
