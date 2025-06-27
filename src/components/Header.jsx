const Header = () => {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">Business Nexus</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/dashboard/investor" className="hover:text-orange-400">Dashboard</a>
          <a href="/chat/i1" className="hover:text-orange-400">Chat</a>
          <a href="/profile" className="hover:text-orange-400">Profile</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
