import { useMenuStore } from "../store/menuStore";

export default function App() {
const saveMenu = useMenuStore((state) => state.saveMenu);
const handleSave = () => {
  saveMenu();
  alert("Menu saved successfully!");
};
const menu = useMenuStore((state) => state.menu);
const addItem = useMenuStore((state) => state.addItem);
const updateItem = useMenuStore((state) => state.updateItem);
const deleteItem = useMenuStore((state) => state.deleteItem);
const addGroup = useMenuStore((state) => state.addGroup);
const updateGroup = useMenuStore((state) => state.updateGroup);
  return (
    
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Menu Editor</h1>

      <button
        onClick={() =>
  addItem({
    name: "",
    link: "",
    role: "",
    icon: "",
  })
}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Item
      </button>

      <button
  onClick={handleSave}
  className="bg-blue-500 text-white px-4 py-2 rounded mb-4 ml-2"
>
  Save
</button>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Link</th>
            <th>Role</th>
            <th>Icon</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {menu.map((item, index) => (
            <tr key={index} className="border-b">
              <td>
                <input
                  className="border p-1"
                  value={item.name}
                  onChange={(e) =>
                    updateItem(index, "name", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  className="border p-1"
                  value={item.link}
                  onChange={(e) =>
                    updateItem(index, "link", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  className="border p-1"
                  value={item.role}
                  onChange={(e) =>
                    updateItem(index, "role", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  className="border p-1"
                  value={item.icon}
                  onChange={(e) =>
                    updateItem(index, "icon", e.target.value)
                  }
                />
              </td>

              <td>
                <button
                  onClick={() => deleteItem(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}