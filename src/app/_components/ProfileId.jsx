"use client";

import { useParams } from "next/navigation";

export function ProfileId() {
  const params = useParams();
  const userId = params.id;

  return <p>{userId}</p>;
}
