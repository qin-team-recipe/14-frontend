"use client";

import { IconCopy } from "@tabler/icons-react";

export function CopyButton({ items }) {
  const copyToClipboard = () => {
    const textArray = items.map(({ text }, i) => `${i + 1}. ${text}`);
    const copyText = textArray.join("\n\n");
    window.navigator.clipboard.writeText(copyText);
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
