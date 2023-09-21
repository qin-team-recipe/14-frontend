import Link from "next/link";

import { DraftBar } from "@/components/Bar";
import { DeleteDraftButton } from "./_components";
import { format } from "date-fns";

export default function Draft() {
  return (
    <div>
      <div className="px-4 py-3">
        <DraftBar />
      </div>
      <div className="divide-y border-y">
        {DRAFTS.map((draft) => (
          <Link
            // TODO: 正しいパスに変更
            href="/my-recipe/new"
            key={draft.id}
            className="flex justify-between gap-x-2 px-4 py-2"
          >
            <div>
              <p className="line-clamp-1 whitespace-normal break-all text-sm">
                {draft.title || "レシピ名未記載"}
              </p>
              <small className="text-xs text-gray-500">
                作成日時: {format(new Date(draft.createdAt), "yyyy年M月dd日")}
              </small>
            </div>

            <DeleteDraftButton recipeId={draft.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

// 下書きのダミーデータ
const DRAFTS = [
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
    createdAt: "2023-06-12",
  },
  {
    id: 4,
    title: "   テストテスト        テスト", // 長いやつ
    createdAt: "2023-07-01",
  },
  {
    id: 5,
    title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    createdAt: "2023-08-31", // 存在しない日付
  },
];
