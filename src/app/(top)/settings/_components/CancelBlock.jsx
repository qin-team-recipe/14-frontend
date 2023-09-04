"use client";

import { IconAlertCircle } from "@tabler/icons-react";

export function CancelBlock({ children }) {
  return (
    <button
      onClick={() => alert("TODO: モーダル出します")}
      className="block w-full"
    >
      <div className="flex justify-between gap-x-4">
        <p>{children}</p>
        <IconAlertCircle size={24} stroke={1.5} />
      </div>
    </button>
  );
}
