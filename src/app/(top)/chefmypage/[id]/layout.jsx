export default function ChefMyPageLayout({ children,params }) {
  console.log(children);
  console.log("aaa");
  return (
    <div>
      <div>
        <h1>aaa</h1>
        <h2>{params.id}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}
