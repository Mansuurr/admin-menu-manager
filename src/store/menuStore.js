import { create } from "zustand";

export const useMenuStore = create((set) => ({
  menu: [
    { name: "Users", link: "/users", role: "admin", icon: "user" }
  ],

  addItem: (item) =>
    set((state) => ({
      menu: [...state.menu, item],
    })),

  updateItem: (index, field, value) =>
    set((state) => {
      const updated = [...state.menu];
      updated[index][field] = value;
      return { menu: updated };
    }),

  deleteItem: (index) =>
    set((state) => ({
      menu: state.menu.filter((_, i) => i !== index),
    })),
}));