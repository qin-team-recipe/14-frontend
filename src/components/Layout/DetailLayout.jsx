import Image from "next/image";
import { Tabs } from "@/components/Tabs";

export function DetailLayout({ children, image, header, tabItems }) {
  return (
    <div>
      {image ? (
        <div className="relative mb-4">
          <Image
            className="w-full"
            src={image}
            width={500}
            height={500}
            priority
            alt="detail image"
          />
          <div className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-white opacity-70"></div>
        </div>
      ) : undefined}

      <div className="px-4 pt-3">{header}</div>

      <div className="mt-5">
        <Tabs tabItems={tabItems} />
      </div>

      <div>{children}</div>
    </div>
  );
}
