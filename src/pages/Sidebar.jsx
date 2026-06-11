import { useMenuStore } from "../store/menuStore";

export default function Sidebar() {
  const menu = useMenuStore((state) => state.menu);
  
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Sidebar</h1>

      {menu.map((item, i) => (
        <div key={i} className="p-2 border-b">
          {item.name || "empty"}
        </div>
      ))}
    </div>
  );
}