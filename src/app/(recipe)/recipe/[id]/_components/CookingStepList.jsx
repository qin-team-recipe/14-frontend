export function CookingStepList({ steps }) {
  return (
    <ul className="divide-y border-b">
      {steps.map((step, index) => (
        <li className="flex gap-x-2 px-4 py-2" key={step.id}>
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600 text-xs text-white">
            {index + 1}
          </div>
          <p className="text-sm">{step.text}</p>
        </li>
      ))}
    </ul>
  );
}
