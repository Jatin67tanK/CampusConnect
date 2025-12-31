import { Link } from "react-router-dom";


export default function Footer(){
    return (
       <footer className="bg-white border-t">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-6 text-sm text-gray-500 gap-4">
          <span>© 2025 UniversityPortal. All rights reserved.</span>

          <div className="flex gap-6">
            <Link to="/Privacy" className="hover:text-gray-800 transition">Privacy</Link>
            <Link to="/Terms" className="hover:text-gray-800 transition">Terms</Link>
            <Link to="/Support" className="hover:text-gray-800 transition">Support</Link>
          </div>
        </div>
      </footer>
    )
}