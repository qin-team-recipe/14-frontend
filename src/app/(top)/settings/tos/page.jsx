import { TosBar } from "@/components/Bar";

// 利用規約ページ
export default function TermsOfService() {
  return (
    <div>
      <TosBar />
      <div
        className="prose prose-sm px-4"
        dangerouslySetInnerHTML={{ __html: DATA }}
      />
    </div>
  );
}

// ダミーデータ
const DATA = `
<div>
  <h2>第一項</h2>
  <div>
    <p>
      吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。1
    </p>
    <p>
      吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。2
    </p>
  </div>

  <h2>第二項</h2>
  <div>
    <p>
      吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。1
    </p>
    <ul>
      <li>項目1</li>
      <li>項目2</li>
      <li>項目3</li>
    </ul>
  </div>
</div>
`;
