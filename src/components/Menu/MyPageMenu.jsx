"use client";

import Link from "next/link";
import { IconCopy, IconEdit } from "@tabler/icons-react";
import { Menu } from "./Menu";
import { MenuItemContainer } from "./MenuItemContainer";

// マイページ画面で使用するメニュー
export function MyPageMenu() {
  return (
    <Menu
      items={[
        {
          type: "item",
          key: "edit",
          component: (
            <MenuItemContainer icon={IconEdit}>
              <Link href="mypage/edit">プロフィールを編集する</Link>
            </MenuItemContainer>
          ),
        },
        {
          type: "item",
          key: "copy",
          component: (
            <MenuItemContainer icon={IconCopy}>
              <button onClick={() => alert("TODO: URLをコピーします")}>
                URLをコピーする
              </button>
            </MenuItemContainer>
          ),
        },
      ]}
    />
  );
}
