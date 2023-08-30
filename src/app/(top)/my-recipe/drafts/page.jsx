"use client";

import { DraftBar } from "@/components/Bar";
import { IconTrash } from "@tabler/icons-react";

export default function Draft() {
  return (
    <div>
      <div className="px-4 py-3">
        <DraftBar />
      </div>
      <ul className="divide-y border-y">
        {drafts.map((item) => (
          <li key={item.id} className="flex gap-x-4 px-4 py-2">
            <div className="flex-1 space-y-1">
              <p className="truncate">{item.title || "レシピ名未記載"}</p>
              <small className="text-xs text-gray-500">
                作成日時: {item.createdAt}
              </small>
            </div>
            <button onClick={() => alert("モーダルでます")}>
              <IconTrash size={24} stroke={1.5} className="text-gray-500" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const drafts = [
  {
    id: 1,
    title: "グラタン",
    createdAt: "2023-04-22",
  },
  {
    id: 2,
    title: "カレーライス",
    createdAt: "2023-05-30",
  },
  {
    id: 3,
    title: "", // 空文字のやつ
    createdAt: "2023-06-30",
  },
  {
    id: 4,
    title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // 長いやつ
    createdAt: "2023-06-30",
  },
];
