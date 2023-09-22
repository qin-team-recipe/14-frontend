"use client";

import { IconCopy, IconEdit } from "@tabler/icons-react";
import { Menu } from "./Menu";

// マイページ画面で使用するメニュー
export function MyPageMenu() {
  return (
    <Menu
      items={[
        {
          type: "anchor",
          href: "https://yahoo.co.jp/",
          icon: IconEdit,
          text: "プロフィールを編集する",
        },
        {
          type: "button",
          onClick: () => alert("TODO: URLをコピーします"),
          icon: IconCopy,
          text: "URLをコピーする",
        },
      ]}
    />
  );
}
