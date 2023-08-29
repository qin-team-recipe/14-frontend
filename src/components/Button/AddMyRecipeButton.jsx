export function AddMyRecipeButton() {
  return (
    <>
      <button className="flex h-12 w-[200px] cursor-pointer items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-400 hover:shadow-xl">
        <p className="px-5 py-4 text-white">
          <span className="font-bold">マイレシピ</span>を追加する
        </p>
      </button>
    </>
  );
}
