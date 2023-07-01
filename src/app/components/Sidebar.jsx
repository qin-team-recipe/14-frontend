"use client";

import React from "react";

import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-blue-200">
      {/* ロゴ */}
      <div className="">ロゴ</div>
      <ul>
        <li>
          <Link href="/">
            <div className="flex">
              <IconSearch />
              <p>探す</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
