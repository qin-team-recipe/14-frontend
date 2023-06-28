import "@/app/globals.css";
import { Inter } from "next/font/google";

//フォントやテキストスタイルを設定するもの。おそらくラテン文字系が設定されているかも。
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "レシピアプリ",
  description: "お好みのレシピを探し、簡単に作ることができます。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
