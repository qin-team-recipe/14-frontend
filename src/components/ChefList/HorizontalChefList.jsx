"use client";

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const DUMMY_DATA = [
  {
    id: 1,
    name: "しまぶーシェフ",
    image: "https://picsum.photos/140/150?random-1",
  },
  {
    id: 2,
    name: "名前が2行のシェフです",
    image: "https://picsum.photos/140/150?random-2",
  },
  {
    id: 3,
    name: "名前が3行のシェフです名前が3行のシェフです",
    image: "https://picsum.photos/140/150?random-3",
  },
  {
    id: 4,
    name: "りゅーじ",
    image: "https://picsum.photos/140/150?random-4",
  },
  {
    id: 5,
    name: "長谷部シェフ",
    image: "https://picsum.photos/140/150?random-5",
  },
  {
    id: 6,
    name: "長谷部シェフ",
    image: "https://picsum.photos/140/150?random-6",
  },
  {
    id: 7,
    name: "長谷部シェフ",
    image: "https://picsum.photos/140/150?random-7",
  },
];

export function HorizontalChefList() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        {DUMMY_DATA.map((chef) => (
          <Link
            className="relative flex-shrink-0"
            key={chef.id}
            href={`/profile/${chef.id}`}
          >
            <Image
              className="rounded-2xl"
              key={chef.id}
              src={chef.image}
              alt={chef.name}
              width={140}
              height={140}
            />
            <div className="absolute bottom-2 line-clamp-2 px-2 font-semibold text-white">
              {chef.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
