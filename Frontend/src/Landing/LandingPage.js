import { GraduationCap, Users, User, Building2 } from "lucide-react";
import RoleCard from "../component/Rolecard";
import student from "../Assets/Student.png";
import admin from "../Assets/admin.png";
import faculty from "../Assets/faculty.png";
import hod from "../Assets/hod.png";
import { Link } from "react-router-dom";

export default function UniversityPortal() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Navbar */}
      

      {/* Main Content */}
      <main className="flex-1">

        {/* Hero Section */}
        <section className="text-center mt-20 px-4">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium">
            Start Your Session
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Your Role. Your Workspace.
          </h1>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Access a personalized workspace designed for your academic role.
          </p>
        </section>

        {/* Role Cards */}
        <section className="container mx-auto mt-16 px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/AdminLogin">
            <RoleCard
              title="Admin"
              description="Manage users, configure system settings, and oversee platform integrity."
              icon={<Users className="w-8 h-8" />}
              color="from-purple-700 to-purple-500"
              image={admin}
            />
          </Link>
          <Link to="FacultyLogin" >
            <RoleCard
              title="Faculty"
              description="Organize courses, grade assignments, and track student progress."
              icon={<GraduationCap className="w-8 h-8" />}
              color="from-teal-600 to-teal-400"
              image={faculty}
            />
          </Link>
          <Link to="StudentLogin" >
            <RoleCard
              title="Student"
              description="Check your timetable, submit work, and view your academic results."
              icon={<User className="w-8 h-8" />}
              color="from-orange-600 to-orange-400"
              image={student}
            />
          </Link>
          <Link to="/HodLogin">
            <RoleCard
              title="HOD / Principal"
              description="Review departmental reports, staff performance, and strategic goals."
              icon={<Building2 className="w-8 h-8" />}
              color="from-indigo-700 to-indigo-500"
              image={hod}
            />
          </Link>
        </section>
      </main>

      {/* Footer */}
      
    </div >
  );
}
