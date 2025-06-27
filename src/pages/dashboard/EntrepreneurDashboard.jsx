import React, { useState } from "react";
import { collaborationRequests as initialRequests, investors } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

const EntrepreneurDashboard = () => {
  const navigate = useNavigate();
  const currentEntrepreneurId = "e1";

  const stored = localStorage.getItem("collabRequests");
  const [requests, setRequests] = useState(
    stored
      ? JSON.parse(stored)
      : initialRequests.filter(r => r.entrepreneurId === currentEntrepreneurId)
  );


  const updateStatus = (id, newStatus) => {
    const updated = requests.map(r =>
      r.id === id ? { ...r, status: newStatus } : r
    );
    setRequests(updated);
    localStorage.setItem("collabRequests", JSON.stringify(updated));
  };


  const statusColor = {
    accepted: "text-green-600",
    rejected: "text-red-600",
    pending: "text-orange-500",
  };

  const cardBg = {
    accepted: "bg-green-50 border-green-200",
    rejected: "bg-red-50 border-red-200",
    pending: "bg-yellow-50 border-yellow-200",
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Entrepreneur Dashboard</h2>
        <span className="text-sm text-gray-500">{requests.length} Pending Requests</span>
      </div>

      <div className="space-y-6">
        {requests.map(req => {
          const inv = investors.find(i => i.id === req.investorId);
          const status = req.status;

          return (
            <div
              key={req.id}
              className={`border rounded-xl p-5 shadow-sm transition ${cardBg[status]}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{inv.name}</h3>
                  <p className="text-sm text-gray-600">{inv.snippet}</p>
                </div>
                <span className={`text-sm font-medium ${statusColor[status]}`}>
                  ● {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>

              <p className="mt-4 text-gray-700">{req.message}</p>
              <p className="text-xs text-gray-500 mt-1">Received on {req.date}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate(`/profile/investor/${inv.id}`)}
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                >
                  👤 View Profile
                </button>

                {status === "pending" ? (
                  <>
                    <button
                      onClick={() => updateStatus(req.id, "accepted")}
                      className="bg-blue-900 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-800"
                    >
                      ✔ Accept
                    </button>
                    <button
                      onClick={() => updateStatus(req.id, "rejected")}
                      className="bg-white border border-gray-400 text-gray-800 rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      ✖ Decline
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => navigate(`/chat/${inv.id}`)}
                    className="bg-blue-900 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-800"
                  >
                    💬 Message
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
