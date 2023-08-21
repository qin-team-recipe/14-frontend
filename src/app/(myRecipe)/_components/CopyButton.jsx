import { IconCopy } from "@tabler/icons-react";

export function CopyButton() {
  return (
    <div className="flex justify-end px-4">
      <button className="flex items-center gap-x-1">
        <IconCopy color="rgb(59 130 246) " width={15} />
        <div className="text-xs text-blue-500">コピーする</div>
      </button>
    </div>
  );
}
