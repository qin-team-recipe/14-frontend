import "@/app/globals.css";
import { Navigation } from "./_components/Navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="mx-auto flex min-h-screen sm:max-w-2xl sm:gap-x-5 sm:px-4">
          <Navigation />
          <main className="w-full overflow-hidden border-gray-200 pb-5 sm:border-x">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
