import { Outlet } from "react-router-dom";
import HodSidebar from "../component/HodSidebar";
import { useSidebar } from "../Context/SidebarContext";

export default function HodLayout() {
  const { open } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <HodSidebar />

      {/* Main Content */}
      <main
        className={`
          transition-all duration-300
          ${open ? "ml-64" : "ml-20"}
          min-h-screen
          p-6
        `}
      >
        {/* Child Pages Render Here */}
        <Outlet />
      </main>
    </div>
  );
}
