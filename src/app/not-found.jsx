import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center bg-white text-gray-800 text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
