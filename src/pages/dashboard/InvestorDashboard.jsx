import React from "react";
import { entrepreneurs } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

const InvestorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Entrepreneur Dashboard</h2>
        <p className="text-gray-600 mb-6">Explore entrepreneurs and their startups. Reach out for potential collaboration.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entrepreneurs.map((e) => (
            <div key={e.id} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{e.name}</h3>
                  <p className="text-sm text-gray-500">{e.startup}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">
                  {e.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">{e.pitch}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/chat/${e.id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
                >
                  Message
                </button>
                <button
                  onClick={() => navigate(`/profile/entrepreneur/${e.id}`)}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-100"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
