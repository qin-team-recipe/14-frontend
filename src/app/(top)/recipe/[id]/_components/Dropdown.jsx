import { useDetectClickOutside } from "react-detect-click-outside";

// 渡したコンポーネント以外をクリックすると発火
export function Dropdown({ closeToggle, components }) {
  const ref = useDetectClickOutside({ onTriggered: closeToggle });
  return <div ref={ref}>{components}</div>;
}
