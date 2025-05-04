import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar / Navbar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">SkillQuotient AI</div>
        <nav className="flex-1 px-4 space-y-4">
          <NavItem label="Dashboard" />
          <NavItem label="Generate Question Bank" />
          <NavItem label="Evaluate Question Bank" />
          <NavItem label="Reports" />
          <NavItem label="Interactive Q&A" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </header>

        {/* Main Grid Content */}
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ label }) {
  return (
    <button className="w-full text-left py-2 px-3 hover:bg-indigo-700 rounded-md">
      {label}
    </button>
  );
}
