import Sidebar from "../pages/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}