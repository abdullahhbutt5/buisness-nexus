import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ user }) => {
    return (
        <aside className="bg-white border-r w-64 p-4 hidden md:block">
            <h2 className="text-2xl font-bold text-orange-600 mb-6">Business Nexus</h2>
            <nav className="flex flex-col gap-3">
                <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
                <Link to="/chat/i1" className="text-gray-700 hover:text-orange-500">Chat</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
