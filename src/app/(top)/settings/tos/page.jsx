import { TosBar } from "@/components/Bar";

// 利用規約ページ
export default function TermsOfConditions() {
  return (
    <div>
      <div className="px-4 py-3">
        <TosBar />
      </div>
      <div className="pt-5">
        <ul className="space-y-8 px-4">
          {TOSS.map((tos) => {
            return (
              <li key={tos.title} className="space-y-4">
                <h2 className="font-bold">{tos.title}</h2>
                <div className="text-sm">
                  <p className="mb-4">{tos.desc1}</p>
                  <p>{tos.desc2}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// ダミーデータ
const TOSS = [
  {
    title: "第一項",
    desc1:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。1",
    desc2:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。2",
  },
  {
    title: "第二項",
    desc1:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。1",
    desc2:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。2",
  },
];
