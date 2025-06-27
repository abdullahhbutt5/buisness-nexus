import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center p-4">
      <img src="/logo.png" className="mt-4 mb-4 w-32 sm:w-48" alt="Logo" />

      <h2 className="text-2xl sm:text-4xl font-bold text-center mt-2 mb-4 text-gray-800">
        Connect Investors with{" "}
        <span className="text-blue-600">Entrepreneurs</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mb-6">
        The premier platform for building meaningful business relationships. Whether
        you&apos;re seeking investment or looking to invest, find your perfect match.
      </p>

      <div className="flex gap-4 mb-10">
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Started →
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Sign In
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-8 px-4">
        {[
          {
            title: "Smart Matching",
            icon: "🤝",
            desc: "AI-powered matches between investors and entrepreneurs based on mutual goals."
          },
          {
            title: "Growth Focused",
            icon: "📈",
            desc: "Curated tools & resources for accelerated business growth and success."
          },
          {
            title: "Direct Communication",
            icon: "💬",
            desc: "Built-in messaging to collaborate securely and seamlessly."
          },
          {
            title: "Secure Platform",
            icon: "🛡️",
            desc: "Enterprise-grade security to protect all your data and interactions."
          }
        ].map((feat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition"
          >
            <div className="text-4xl mb-3">{feat.icon}</div>
            <h3 className="font-semibold mb-2 text-gray-800">{feat.title}</h3>
            <p className="text-sm text-gray-500">{feat.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-full max-w-3xl p-6 rounded-xl text-center text-white shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Ready to Connect?</h3>
        <p className="mb-4">
          Join thousands of investors and entrepreneurs and build the future together.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
        >
          Start Your Journey →
        </button>
      </div>
    </div>
  );
}
