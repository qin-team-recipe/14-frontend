import { IconCopy } from "@tabler/icons-react";

export function CopyButton() {
  return (
    <button className="flex items-center gap-x-0.5 text-blue-500">
      <IconCopy width={16} />
      <div className="text-xs">コピーする</div>
    </button>
  );
}
