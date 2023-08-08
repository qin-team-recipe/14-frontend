export function FollowButton({ children }) {
  return (
    <button
      className={`
        block w-full rounded bg-[#E54D2E] px-3 py-1
        text-center text-sm text-white`}
    >
      {children}
    </button>
  );
}
