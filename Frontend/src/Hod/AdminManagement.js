import { useState } from "react";
import { Search } from "lucide-react";
import { useSidebar } from "../Context/SidebarContext";
import HodSidebar from "../component/HodSidebar";

export default function AdminManagement() {
  const { open } = useSidebar();

  /* ================= STATE ================= */
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  const [admins, setAdmins] = useState([
    { name: "John Doe", username: "j.doe_admin", date: "Jan 12, 2023", status: "Active" },
    { name: "Sarah Smith", username: "s.smith_admin", date: "Mar 04, 2023", status: "Inactive" },
    { name: "Michael Brown", username: "m.brown_admin", date: "Jun 15, 2023", status: "Active" },
  ]);

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Admin name is required";

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    } else if (
      admins.some(
        (a) => a.username.toLowerCase() === form.username.toLowerCase()
      )
    ) {
      newErrors.username = "Username already exists";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Minimum 8 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateAdmin = () => {
    if (!validate()) return;

    setAdmins([
      {
        name: form.name,
        username: form.username,
        date: new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        status: "Active",
      },
      ...admins,
    ]);

    setForm({ name: "", username: "", password: "" });
    setErrors({});
    setShowAddAdmin(false);
  };

  const toggleStatus = (index) => {
    const updated = [...admins];
    updated[index].status =
      updated[index].status === "Active" ? "Inactive" : "Active";
    setAdmins(updated);
  };

  const closeModal = () => {
    setShowAddAdmin(false);
    setForm({ name: "", username: "", password: "" });
    setErrors({});
  };

  /* ================= JSX ================= */
  return (
    <>
      <HodSidebar />

      {/* ===== HEADER ===== */}
      <header
        className={`fixed top-0 right-0 h-16 bg-white border-b flex items-center
        transition-all duration-300 z-30
        ${open ? "left-64" : "left-20"}`}
      >
        <div className="w-full px-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Admin Management</h1>
            <p className="text-sm text-gray-500">
              View and control administrator access
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Search admin..."
                className="w-72 pl-9 pr-4 py-2 rounded-lg border text-sm focus:ring-2 focus:ring-violet-200 outline-none"
              />
            </div>

            <button
              onClick={() => setShowAddAdmin(true)}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white
              bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90 shadow"
            >
              + Add Admin
            </button>
          </div>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main
        className={`pt-20 bg-gray-50 min-h-screen transition-all duration-300
        ${open ? "pl-10" : "pl-10"}`}
      >
        <div className="p-6">
          <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 text-left">Admin Name</th>
                  <th className="px-6 py-4 text-left">Username</th>
                  <th className="px-6 py-4 text-left">Password</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {admins.map((admin, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="font-medium">{admin.name}</p>
                      <p className="text-xs text-gray-500">Created: {admin.date}</p>
                    </td>
                    <td className="px-6 py-4 font-mono">{admin.username}</td>
                    <td className="px-6 py-4 text-gray-400">••••••••</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        admin.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        ● {admin.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => toggleStatus(i)}
                        className={`px-4 py-1 rounded text-xs ${
                          admin.status === "Active"
                            ? "bg-red-50 text-red-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {admin.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ===== ADD ADMIN MODAL ===== */}
      {showAddAdmin && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-full max-w-xl rounded-xl shadow-xl overflow-hidden">

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700">
              New admin accounts are created as <b>Active</b> by default.
            </div>

            <div className="p-6 space-y-4">
              {/* Name */}
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Admin Full Name"
                  className={`w-full px-4 py-2 border rounded-lg text-sm
                  ${errors.name ? "border-red-500" : ""}`}
                />
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              </div>

              {/* Username */}
              <div>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className={`w-full px-4 py-2 border rounded-lg text-sm
                  ${errors.username ? "border-red-500" : ""}`}
                />
                <p className="text-xs text-red-500 mt-1">{errors.username}</p>
              </div>

              {/* Password */}
              <div>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full px-4 py-2 border rounded-lg text-sm
                  ${errors.password ? "border-red-500" : ""}`}
                />
                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 bg-gray-50 px-6 py-4 border-t">
              <button
                onClick={closeModal}
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateAdmin}
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white
                bg-gradient-to-r from-violet-600 to-purple-600"
              >
                Create Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
