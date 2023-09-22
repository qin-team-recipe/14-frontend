import {
  CreateRecipeMenu,
  ListMenu,
  MemoItemMenu,
  MyPageMenu,
  MyRecipeMenu,
  RecipeItemMenu,
  SNSMenu,
} from "@/components/Menu";

// TODO: コンポーネント確認用のサンプルページなので後で消します
export default function Sample() {
  return (
    <div className="m-5 flex flex-col gap-y-4">
      <div>シェフ詳細画面</div>
      <SNSMenu />
      <div>マイページ画面</div>
      <MyPageMenu />
      <div>マイレシピ画面(2パターン対応)</div>
      <MyRecipeMenu status="public" />
      <div>マイレシピ追加画面(2パターン対応)</div>
      <CreateRecipeMenu isEditable />
      <div>買い物リスト画面(2パターン対応)</div>
      <ListMenu order={2} itemsLength={2} />
      <div>買い物リスト画面(自分メモアイテムメニュー)</div>
      <MemoItemMenu />
      <div>買い物リスト画面(レシピアイテムメニュー)</div>
      <RecipeItemMenu />
    </div>
  );
}
