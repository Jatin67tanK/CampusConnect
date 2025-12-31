import React from "react";
import {
  Users,
  UserCheck,
  Shield,
  IndianRupee,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import HodSidebar from "../component/HodSidebar";
import HodHeader from "../component/HodHead";
import { useSidebar } from "../Context/SidebarContext";

export default function Dashboard() {
  const { open } = useSidebar(); // 🔥 sidebar state

  return (
    
    <main
      className={`
        pt-20 px-6 py-8 bg-gray-50 min-h-screen
        transition-all duration-300
        ${open ? "ml-10" : "ml-10"}
      `}
    >
      <header >
      <HodHeader />
    </header>
      <HodSidebar />
      {/* ===== TITLE ===== */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          HOD / Principal Dashboard
        </h1>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard title="TOTAL STUDENTS" value="1,240" color="blue" icon={Users} />
        <StatCard title="TOTAL FACULTY" value="85" color="emerald" icon={UserCheck} />
        <StatCard title="TOTAL ADMINS" value="12" color="indigo" icon={Shield} />
        <StatCard title="FEES PAID COUNT" value="950" color="green" icon={IndianRupee} />
        <StatCard title="FEES UNPAID COUNT" value="290" color="orange" icon={AlertCircle} />
        <StatCard title="UNREAD FEEDBACK" value="5" color="rose" icon={MessageSquare} />
      </div>

      {/* ================= RECENT NOTICES ================= */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Recent Notices
        </h3>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          {[
            ["Mid-Term Examination Schedule Released", "Oct 12, 2023"],
            ["Faculty Meeting: Curriculum Review", "Oct 10, 2023"],
            ["Holiday Announcement: Diwali Break", "Oct 08, 2023"],
            ["Campus Maintenance Update", "Oct 05, 2023"],
          ].map(([title, date], index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 border-b last:border-none hover:bg-gray-50 cursor-pointer transition"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{title}</p>
                <p className="text-xs text-gray-500">Posted on {date}</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* ================= STAT CARD ================= */

function StatCard({ title, value, color, icon: Icon }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    indigo: "bg-indigo-100 text-indigo-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    rose: "bg-rose-100 text-rose-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition">
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center ${colorMap[color]}`}
      >
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500">{title}</p>
        <p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );
}
