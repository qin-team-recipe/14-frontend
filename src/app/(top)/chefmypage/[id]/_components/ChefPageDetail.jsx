import {
  IconArrowNarrowLeft,
  IconDotsCircleHorizontal,
} from "@tabler/icons-react";

export function ChefPageDetail({ params }) {
  // const { id } = ;
  console.log(params);

  return (
    <div>
      <div>{params}</div>
      <div className="px-4 py-3">
        <div className="flex justify-between">
          <IconArrowNarrowLeft />
          <IconDotsCircleHorizontal />
        </div>
        <div>
          <h1>山田シェフ</h1>
          {/* <p>{id}</p> */}
        </div>
        <div className="flex">
          <div>123レシピ</div>
          <div>456フォロワー</div>
        </div>
      </div>
    </div>
  );
}
