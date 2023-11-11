"use client";

import { IconCopy } from "@tabler/icons-react";

export function CopyButton({ items }) {
  const copyToClipboard = () => {
    // テキスト結合
    const methodText = items.reduce((prev, current, index) => {
      return prev + `${index + 1}. ${current.text}\n\n`;
    }, "");
    // クリップボードにコピー
    window.navigator.clipboard.writeText(methodText);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-x-0.5 text-blue-500"
    >
      <IconCopy width={16} />
      <div className="text-xs">コピーする</div>
    </button>
  );
}
