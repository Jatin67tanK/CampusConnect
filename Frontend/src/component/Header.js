import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { useState } from "react";


export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-white border-b">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
             
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <GraduationCap className="w-6 h-6 text-violet-600" />
                    University Portal
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link to="/HelpCenter" className="text-gray-600 hover:text-gray-900 transition">
                        Help Center
                    </Link>
                    <Link to="/Contactsupport" className="text-gray-600 hover:text-gray-900 transition">
                        Contact Support
                    </Link>

                </div>

            </div>
        </header>
    )
}