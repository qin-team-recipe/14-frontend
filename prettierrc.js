module.exports = {
  printWidth: 100, // 1行あたりの最大文字数。この数を超えると改行されます。
  tabWidth: 2, // インデントのスペースの数。
  useTabs: false, // タブを使用するかどうか。false の場合、スペースを使用します。
  semi: true, // 文末にセミコロンを自動挿入するかどうか。
  singleQuote: false, // シングルクォートを使用するかどうか。false の場合、ダブルクォートを使用します。
  quoteProps: "as-needed", // オブジェクトのキーを必要に応じてクォートする。
  trailingComma: "all", // サポートされている場所で末尾のカンマを追加する。
  bracketSpacing: true, // オブジェクトリテラルの中括弧 {} の間にスペースを入れるかどうか。
  bracketSameLine: true, // オブジェクトリテラルの閉じ中括弧 } を新しい行に配置するかどうか、trueの場合は最後の行に追加。
  arrowParens: "always", // (x) => x ではなく、x => x とするかどうか、alwaysのときは括弧を省略しない。
  requirePragma: false, // ファイルの先頭に特定のコメントを書－
  insertPragma: false, // フォーマットされたファイルの先頭に @format を追加するかどうか。
  htmlWhitespaceSensitivity: "css", // HTMLファイルの空白の扱い方。
  endOfLine: "lf", // 改行コードの種類。"lf" は UNIX 形式、"crlf" は Windows 形式。
  embeddedLanguageFormatting: "auto", // 埋め込み言語（例えば、テンプレートリテラル内の HTML）のフォーマットをどのように扱うか。
};
