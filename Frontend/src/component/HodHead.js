import { useSidebar } from "../Context/SidebarContext";

export default function HodHeader() {
  const { open } = useSidebar();

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-white border-b flex items-center
        transition-all duration-300 z-30
        ${open ? "left-64" : "left-20"}
      `}
    >
      {/* Center Title */}
  
      {/* <h1 className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 font-semibold">
        <GraduationCap className="w-6 h-6 text-violet-600" />
        <span>Universal Portal</span>
      </h1>


      {/* Profile */}
      {/* <div className="ml-auto mr-6 flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold">Dr. Sarah Thompson</p>
          <p className="text-xs text-gray-500">Principal</p>
        </div>
        <img
          src="https://i.pravatar.cc/40"
          className="w-9 h-9 rounded-full border"
          alt="Principal Image."
        />
      </div> */} 
      <div className="w-full px-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Hod/Principal Dashboard
            </h1>
            <p className="hidden sm:block text-sm text-gray-500">
              Overview of University Matrices and recent notices.
            </p>
          </div>
        </div>
    </header>
  );
}
