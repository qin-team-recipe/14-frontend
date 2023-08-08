export function ProfileImage({ src }) {
  return (
    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100">
      <img src={src} alt="chef" />
    </div>
  );
}
