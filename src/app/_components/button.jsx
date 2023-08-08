export function Button({ className, text }) {
  return <button className={`block rounded text-center ${className}`}>{text}</button>;
}
