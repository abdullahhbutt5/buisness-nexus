import React from "react";
import { investors } from "../../data/mockData";
import { useParams, useNavigate } from "react-router-dom";

const InvestorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const inv = investors.find(i => i.id === id);

  if (!inv) return <p className="text-center text-red-500 mt-10">Investor not found.</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Back
      </button>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={`https://api.dicebear.com/8.x/initials/svg?seed=${inv.name}&backgroundColor=ccf2ff`}
          alt="Investor avatar"
          className="w-14 h-14 rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{inv.name}</h2>
          <p className="text-gray-600 text-sm">{inv.snippet}</p>
        </div>
      </div>

      <div className="space-y-3 text-gray-700 text-sm">
        <p><span className="font-medium">Bio:</span> {inv.bio}</p>
        <p><span className="font-medium">Interests:</span> {inv.interests}</p>
        <p>
          <span className="font-medium">Portfolio Companies:</span>{" "}
          {inv.portfolio?.length ? inv.portfolio.join(", ") : "None"}
        </p>
      </div>
    </div>
  );
};

export default InvestorProfile;
