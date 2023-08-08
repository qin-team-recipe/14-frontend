export function Button({ className, text }) {
  return (
    <button className={`block text-center rounded ${className}`}>{text}</button>
  );
}
