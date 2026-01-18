export default function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    ghost:
      "text-violet-600 hover:bg-violet-100 focus:ring-violet-500",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled ? disabledStyles : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
