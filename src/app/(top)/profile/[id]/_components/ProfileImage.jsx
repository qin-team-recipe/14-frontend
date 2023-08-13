import Image from "next/image";

export function ProfileImage({ src }) {
  return (
    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100">
      <Image src={src} width={64} height={64} alt="chef" />
    </div>
  );
}
