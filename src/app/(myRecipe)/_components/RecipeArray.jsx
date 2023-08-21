export function RecipeArray() {
  const items = [
    "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。1",
    "  用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。2",
  ];
  return (
    <div>
      {items.map((item, index) => (
        <div className="flex gap-x-2 border-b px-4 pt-2" key={index}>
          <div className="h-5 w-5 shrink-0 rounded-full bg-orange-600 text-center text-sm text-white">
            {index + 1}
          </div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
