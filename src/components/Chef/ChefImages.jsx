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
];

export function ChefImages() {
  const chefs = CHEF_DATA;

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-bold">シェフ</h1>
      <div className="flex gap-x-4">
        {chefs.map((chef) => (
          <ChefImage key={chef.id} name={chef.name} image={chef.image} />
        ))}
      </div>
    </div>
  );
}

function ChefImage({ name, image }) {
  return (
    <div className="flex flex-col items-center gap-y-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="h-16 w-16 rounded-full"
      />
      <p className="text-xs">{name}</p>
    </div>
  );
}
