export default function Home() {
  return (
    //レスポンシブでpだとinputがずれるためmxに変えています
    <div className="p-4 sm:mx-4 sm:mt-4 sm:p-0 ">
      <input className="w-full rounded-lg bg-gray-100" type="text" />
    </div>
  );
}
