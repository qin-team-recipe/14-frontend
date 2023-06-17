module.exports = {
  //extendsには接頭辞として「eslint-config-」が自動でつく。
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    semi: ["error", "always"], //セミコロンがついていない場合にエラーを表示
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ], //シングルクォーテーションのときだけエラーを表示
  },
};
