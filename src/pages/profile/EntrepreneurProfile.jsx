import React from "react";
import { entrepreneurs } from "../../data/mockData";
import { useParams, useNavigate } from "react-router-dom";

const EntrepreneurProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const e = entrepreneurs.find(ent => ent.id === id);

  if (!e) return <p className="text-center text-red-500 mt-10">Entrepreneur not found.</p>;

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
          src={`https://api.dicebear.com/8.x/initials/svg?seed=${e.name}&backgroundColor=ffe0b3`}
          alt="Entrepreneur avatar"
          className="w-14 h-14 rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{e.name}</h2>
          <p className="text-gray-600 text-sm">{e.startup}</p>
        </div>
      </div>

      <div className="space-y-3 text-gray-700 text-sm">
        <p><span className="font-medium">Bio:</span> {e.bio}</p>
        <p><span className="font-medium">Startup Description:</span> {e.pitch}</p>
        <p><span className="font-medium">Funding Needed:</span> {e.fundingNeed}</p>
        <p><span className="font-medium">Pitch Deck:</span> Not shared publicly</p>
      </div>
    </div>
  );
};

export default EntrepreneurProfile;
