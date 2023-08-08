import { Navigation } from "../_components/Navigation";

export default function TopLayout({ children }) {
  return (
    <div className="mx-auto flex min-h-screen sm:max-w-2xl sm:gap-x-5 sm:px-4">
      <Navigation />
      <main className="w-full overflow-hidden border-gray-200 pb-5 sm:border-x">{children}</main>
    </div>
  );
}
