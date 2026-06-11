import { useMenuStore } from "../store/menuStore";

export default function Editor() {
  const menu = useMenuStore((state) => state.menu);
  const addItem = useMenuStore((state) => state.addItem);
  const updateItem = useMenuStore((state) => state.updateItem);
  const deleteItem = useMenuStore((state) => state.deleteItem);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Editor</h1>

      <button
        onClick={() =>
          addItem({ name: "", link: "", role: "", icon: "" })
        }
        className="bg-green-500 text-white px-3 py-1 rounded my-3"
      >
        Add
      </button>

      {menu.map((item, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            value={item.name}
            onChange={(e) =>
              updateItem(i, "name", e.target.value)
            }
            className="border p-1"
          />
          <button
            onClick={() => deleteItem(i)}
            className="bg-red-500 text-white px-2"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}