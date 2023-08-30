import { parse, isValid, format } from "date-fns";

export function CreatedDate({ date }) {
  return (
    <small className="text-gray-500">作成日時: {autoFormatDate(date)}</small>
  );
}

// 日付を自動的にフォーマットする関数
function autoFormatDate(targetDate) {
  // 試すフォーマットのリスト
  const formatsToTest = [
    "yyyy/MM/dd",
    "yyyy-MM-dd",
    "yyyy年M月dd日",
    "yyyymmdd",
  ];

  for (const formatStr of formatsToTest) {
    // 指定フォーマットでパース
    const parsedDate = parse(targetDate, formatStr, new Date());

    // パース後の日付の有効チェック
    if (isValid(parsedDate)) {
      const formattedDate = format(parsedDate, "yyyy年M月dd日");
      return formattedDate;
    }
  }

  return "日付のフォーマットが不正です";
}
