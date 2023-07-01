"use client";

import React from "react";

import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
      {/* ロゴ */}
      <div className="">ロゴ</div>
      <Link href="/search">
        <div className="flex">
          <IconSearch />
          <p>探す</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
