import { useMenuStore } from "../store/menuStore";

export default function Users() {
  const menu = useMenuStore((state) => state.menu);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Link</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Icon</th>
          </tr>
        </thead>

        <tbody>
          {menu.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.link}</td>
              <td className="border p-2">{item.role}</td>
              <td className="border p-2">{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}