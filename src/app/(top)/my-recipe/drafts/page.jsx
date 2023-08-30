"use client";

import Link from "next/link";

import { IconTrash } from "@tabler/icons-react";
import { DraftBar } from "@/components/Bar";
import { CreatedDate } from "./_components";

export default function Draft() {
  return (
    <div>
      <div className="px-4 py-3">
        <DraftBar />
      </div>
      <div className="divide-y border-y">
        {drafts.map((draft) => (
          <Link
            href="/my-recipe/new"
            key={draft.id}
            className="flex justify-between px-4 py-2"
          >
            <div className="">
              <p className="line-clamp-1 whitespace-normal">
                {draft.title || "レシピ名未記載"}
              </p>
              <CreatedDate date={draft.createdAt} />
            </div>

            <button onClick={() => alert("モーダルでます")}>
              <IconTrash size={24} stroke={1.5} className="text-gray-500" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 下書きのダミーデータ
const drafts = [
  {
    id: 1,
    title: "グラタン",
    createdAt: "2023-04-22",
  },
  {
    id: 2,
    title: "カレーライス",
    createdAt: "2023/05/30",
  },
  {
    id: 3,
    title: "", // 空文字のやつ
    createdAt: "2023年6月30日",
  },
  {
    id: 4,
    title: "aaaaaaaaaaaaテストテストテストテストテストテストテストテスト", // 長いやつ
    createdAt: "20230630",
  },
  {
    id: 5,
    title: "testtest",
    createdAt: "2023-09-31", // 存在しない日付
  },
];
