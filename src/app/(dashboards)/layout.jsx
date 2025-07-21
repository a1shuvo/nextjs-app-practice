// app/dashboard/layout.jsx
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-amber-100 shadow-md p-6 md:h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">
          Dashboard
        </h2>
        <nav className="flex flex-col space-y-3">
          <Link href="/dashboard" className="hover:text-amber-700 font-medium">
            🏠 Dashboard Home
          </Link>
          <Link
            href="/dashboard/profile"
            className="hover:text-amber-700 font-medium"
          >
            👤 My Profile
          </Link>
          <Link
            href="/dashboard/favorites"
            className="hover:text-amber-700 font-medium"
          >
            ⭐ Favorites
          </Link>
          <Link
            href="/dashboard/reviews"
            className="hover:text-amber-700 font-medium"
          >
            📝 My Reviews
          </Link>
          <Link
            href="/dashboard/history"
            className="hover:text-amber-700 font-medium"
          >
            📜 History
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-white p-6">
        {/* Top navbar */}
        <div className="w-full flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Welcome!</h1>
          <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">
            Logout
          </button>
        </div>

        {/* Page Content */}
        <div className="bg-gray-50 p-4 rounded shadow">{children}</div>
      </main>
    </div>
  );
}
