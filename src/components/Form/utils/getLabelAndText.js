// MultiTextFieldで使用する、ラベルとボタンテキストを返す関数
export function getLabelAndText(type) {
  switch (type) {
    case "ingredient": {
      return { label: "材料", text: "材料を追加する" };
    }
    case "step": {
      return { label: "作り方", text: "工程を追加する" };
    }
    case "link": {
      return { label: "リンク（任意）", text: "リンクを追加する" };
    }
    default:
      throw new Error("意図しないtypeです");
  }
}
