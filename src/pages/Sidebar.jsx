import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const items = [
    { name: "Editor", link: "/" },
    { name: "Users", link: "/users" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className={`p-2 rounded block ${
              location.pathname === item.link
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}