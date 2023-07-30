"use client";

import { useParams } from "next/navigation";

export function ProfileName() {
  const params = useParams();
  const userId = params.id;
  console.log(params);
  return (
    <div>
      <p className="text-2xl font-bold">山田シェフ</p>
      <p>{userId}</p>
    </div>
  );
}
