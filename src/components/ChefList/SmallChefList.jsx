"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const CHEF_DATA = [
  {
    id: 1,
    name: "山田シェフ",
    image:
      "https://lh5.googleusercontent.com/9lKjWjwUBzRa1HD-Su-DtLwkztEJ9GSjmwPL_elUi9mswU2tQODOubH9hZQ3Mj34u7t19MqlRRfqUOV287EYUL_EWKcChXfAhEBrziOvhXBDSq2F0hw1yjFgAytVyL_Me7pJ518CePDk0KF8hA",
  },
  {
    id: 2,
    name: "田中シェフ",
    image:
      "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "鳥羽シェフ",
    image: "https://otonasalone.jp/wp-content/uploads/2022/03/sub2.jpg",
  },
  {
    id: 4,
    name: "斉藤シェフ",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=677&q=80",
  },
  {
    id: 5,
    name: "高橋シェフ",
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 6,
    name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    image:
      "https://plus.unsplash.com/premium_photo-1661299381229-1002c9d65f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    name: "大谷翔平",
    image:
      "https://plus.unsplash.com/premium_photo-1661595209842-21fb1409dc07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    id: 8,
    name: "レオナルド・ダ・ヴィンチ",
    image:
      "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
  },
  {
    id: 9,
    name: "マーク・ザッカーバーグ",
    image:
      "https://plus.unsplash.com/premium_photo-1661778032392-28cecebb8059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    id: 10,
    name: "ビル・ゲイツ",
    image:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2712&q=80",
  },
];

export function SmallChefList() {
  const [emblaRef] = useEmblaCarousel();

  const chefs = CHEF_DATA;

  return (
    <div ref={emblaRef} className="space-y-3">
      <div className="flex gap-x-4">
        {chefs.map((chef) => (
          <Link
            key={chef.id}
            href={`/profile/${chef.id}`}
            className="flex flex-shrink-0 flex-col items-center gap-y-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={chef.image}
              alt={`${chef.name}'s profile`}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="line-clamp-1 w-16 break-all text-xs">
              {chef.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
