// Reusable Card Component for CampusConnect / University Portal
// This component is role-agnostic and can be used across Landing Page, Dashboards, and Admin panels

import { ArrowRight } from "lucide-react";

export default function Card({
  title,
  description,
  icon,
  bgColor = "bg-slate-800",
  actionText = "Access Portal",
  onAction,
}) {
  return (
    <div className="rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Top Image / Icon Section */}
      <div
        className={`h-36 ${bgColor} flex items-center justify-center text-white text-4xl`}
      >
        {icon}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>

        {/* Action */}
        <button
          onClick={onAction}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          {actionText}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
