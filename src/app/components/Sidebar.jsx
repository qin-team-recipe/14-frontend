"use client";

import React from "react";

import { IconSearch } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="">ロゴ</div>
      <ul>
        <li className="text-right">
          <Link href="/">
            <div className="flex">
              <IconSearch />
              <p>探す</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/favorite">
            <div className="flex">
              <IconHeart />
              <p>お気に入り</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/list">
            <div className="flex">
              <IconShoppingCart />
              <p>買い物リスト</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
