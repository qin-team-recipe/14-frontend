import Link from "next/link";

export function ProfileEditLink({ children }) {
  return (
    <Link
      href="/my-page/edit"
      className="block w-full rounded border border-black px-3 py-1 text-center text-sm"
    >
      {children}
    </Link>
  );
}
