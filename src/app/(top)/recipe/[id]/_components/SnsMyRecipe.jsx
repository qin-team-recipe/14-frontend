"use client";

import { IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";
import { EditRecipe } from ".";

export function SnsMyRecipe({ isPublished, setIsPublished }) {
  return (
    <div className="flex gap-3">
      <Link href="https://www.youtube.com/" target="_blank">
        <IconBrandYoutube stroke={1.5} />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <IconBrandInstagram stroke={1.5} />
      </Link>
      <EditRecipe isPublished={isPublished} setIsPublished={setIsPublished} />
    </div>
  );
}
