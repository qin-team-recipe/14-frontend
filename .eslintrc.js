module.exports = {
  extends: [
    // 基本的なルールが記載されているため必要
    "eslint:recommended",
    // nextの推奨ルールのため必要
    "next/core-web-vitals",
    //eslint-plugin-tailwindcssの設定
    "plugin:tailwindcss/recommended",
    // ESLintにはコードの書式設定ルールも含まれており、競合する可能性があるため必要。
    //prettierを拡張すると、ESLintのコアルールの多くがオフになる。ESLintとPrettierが競合することを防いでくれるため
    //一番最後に記述する必要がある。
    "prettier",
  ],
};
