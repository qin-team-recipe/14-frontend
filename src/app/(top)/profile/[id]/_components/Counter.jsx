export function Counter({ count, type }) {
  const text = getSuffixText(type);

  return (
    <p className="text-sm">
      <span className="font-bold">{count}</span>
      {text}
    </p>
  );
}

function getSuffixText(type) {
  switch (type) {
    case "recipe": {
      return "レシピ";
    }
    case "follower": {
      return "フォロワー";
    }
    default: {
      throw new Error("意図しないtypeです");
    }
  }
}
