import { ArrowRight } from "lucide-react";

export default function Rolecard({
  title,
  description,
  icon,
  image,
}) {
  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Image / Gradient Background */}
      <div
        className="relative h-40 bg-cover bg-center"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "linear-gradient(to right, #4f46e5, #6366f1)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Icon */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>

        <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
          Access Portal
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
