import Link from "next/link";

export function Menu({ items }) {
  return (
    <div className="w-72 rounded-md border shadow-xl">
      {items.map((item, index) => {
        switch (item.type) {
          case "anchor": {
            if (!item.href) {
              throw new Error("item.typeがanchorの場合はhrefが必須です");
            }
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="flex w-full items-center gap-x-2 bg-white px-3 py-2.5 text-gray-500 hover:bg-gray-50"
              >
                <Icon size={16} stroke={1.5} />
                <div className="text-sm">{item.text}</div>
              </Link>
            );
          }
          case "button": {
            if (!item.onClick) {
              throw new Error("item.typeがbuttonの場合はonClickが必須です");
            }
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.onClick}
                className="flex w-full items-center gap-x-2 bg-white px-3 py-2.5 text-gray-500 hover:bg-gray-50"
              >
                <Icon size={16} stroke={1.5} />
                <div className="text-sm">{item.text}</div>
              </button>
            );
          }
          case "divider": {
            return <hr key={index} />;
          }
          default: {
            throw new Error("invalid type");
          }
        }
      })}
    </div>
  );
}
