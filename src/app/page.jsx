import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="container h-full mx-auto xl:px-50 max-x-5xl">
        <div className="grid grid-cols-3 h-full">
          <Sidebar />
          <p className="text-red-500">はろー</p>
          <div className="bg-blue-200 min-h-screen"></div>
        </div>
      </div>
    </div>
  );
}
