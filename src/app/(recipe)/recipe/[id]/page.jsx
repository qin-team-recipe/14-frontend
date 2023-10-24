import { CookingStepList } from "./_components";

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
  ];

  return (
    <div>
      <CookingStepList steps={steps} />
    </div>
  );
}
