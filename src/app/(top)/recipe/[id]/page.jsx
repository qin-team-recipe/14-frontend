import { CopyButton } from "./_components";

export default function Recipe() {
  const steps = [
    {
      id: 1,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。1",
    },
    {
      id: 2,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。2",
    },
    {
      id: 3,
      text: "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。3",
    },
  ];

  return (
    <div className="space-y-2">
      <ul className="divide-y border-b">
        {steps.map((step, index) => (
          <li className="flex gap-x-2 px-4 py-2.5" key={step.id}>
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600 text-xs text-white">
              {index + 1}
            </div>
            <p className="text-sm">{step.text}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-end px-4">
        <CopyButton items={steps} />
      </div>
    </div>
  );
}
