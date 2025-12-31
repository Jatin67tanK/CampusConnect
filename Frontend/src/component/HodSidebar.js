import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserCog,
  Bell,
  FileText,
  LogOut
} from "lucide-react";
import { useSidebar } from "../Context/SidebarContext";
import Logo from "../Assets/Logo.png"; // ✅ update path if needed

export default function HodSidebar() {
  const { open, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/hod/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Admin Management",
      path: "/hod/adminmanagement",
      icon: <UserCog size={20} />,
    },
    {
      name: "Notices",
      path: "/hod/notices",
      icon: <Bell size={20} />,
    },
    {
      name: "Reports",
      path: "/hod/reports",
      icon: <FileText size={20} />,
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen bg-white border-r z-40
        transition-all duration-300 ease-in-out
        ${open ? "w-64" : "w-20"}
      `}
    >
      <div className="flex flex-col h-full">

        {/* ================= HEADER ================= */}
        <div className="relative h-16 flex items-center border-b px-4">

          {/* Logo (LEFT) */}
          {open && (
            <div className="absolute left-4 flex items-center">
              <img
                src={Logo}
                alt="Campus Connect"
                className="w-8 h-8 object-contain"
              />
            </div>
          )}

          {/* App Name (CENTER) */}
          {open && (
            <div className="absolute left-1/2 -translate-x-1/2">
              <span className="font-semibold text-gray-800 whitespace-nowrap">
                Campus Connect
              </span>
            </div>
          )}

          {/* Hamburger (RIGHT) */}
          <button
            onClick={toggleSidebar}
            className={`
              absolute right-4
              w-10 h-10 flex items-center justify-center rounded-lg
              hover:bg-gray-100
              transition-all duration-300
              ${open ? "rotate-90 scale-105" : "rotate-0"}
            `}
          >
            ☰
          </button>
        </div>

        {/* ================= MENU ================= */}
        <ul className="mt-4 space-y-2 px-2 flex-1">
          {menuItems.map(({ name, path, icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `
                    flex items-center gap-3 p-3 rounded-lg transition
                    ${
                      isActive
                        ? "bg-violet-100 text-violet-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `
                }
              >
                <span className="text-lg">{icon}</span>
                {open && <span>{name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ================= LOGOUT ================= */}
        <div className="px-2 pb-4">
          <button
            onClick={handleLogout}
            className="
              w-full flex items-center gap-3 p-3 rounded-lg
              text-red-600 hover:bg-red-50 transition
            "
          >
            <LogOut size={20} />
            {open && <span>Logout</span>}
          </button>
        </div>

      </div>
    </aside>
  );
}
