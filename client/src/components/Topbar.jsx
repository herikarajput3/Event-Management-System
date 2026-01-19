const Topbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex-none">
        <button className="btn btn-sm btn-outline">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
