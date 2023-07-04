"use client";

import React from "react";

import { IconSearch } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="z-15 fixed bottom-0 left-0 w-screen bg-blue-300 sm:left-0 sm:top-0 sm:mr-3 sm:w-36">
      <nav>
        <ul className="flex justify-around sm:flex-col">
          <li className="hidden sm:block">ロゴ</li>
          <li>
            <Link href="/">
              <div className="flex flex-col items-center sm:flex-row">
                <IconSearch />
                <p>探す</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/favorite">
              <div className="flex flex-col items-center sm:flex-row">
                <IconHeart className="items-center" />
                <p>お気に入り</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <div className="flex flex-col items-center sm:flex-row">
                <IconShoppingCart />
                <p>買い物リスト</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
