import { create } from "zustand";

export const useMenuStore = create((set, get) => ({
  menu: JSON.parse(localStorage.getItem("menu")) || [
    { name: "Users", link: "/users", role: "admin", icon: "user" }
  ],

  addItem: (item) =>
    set((state) => ({
      menu: [...state.menu, item],
    })),

  updateItem: (index, field, value) =>
    set((state) => {
      const menu = [...state.menu];
      menu[index][field] = value;
      return { menu };
    }),

  deleteItem: (index) =>
    set((state) => ({
      menu: state.menu.filter((_, i) => i !== index),
    })),

  saveMenu: () => {
    const menu = get().menu;
    localStorage.setItem("menu", JSON.stringify(menu));
  },
}));