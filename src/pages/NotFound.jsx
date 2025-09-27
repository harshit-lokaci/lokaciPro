// NotFound.jsx
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[75vh] text-center bg-white text-slate-900 p-5">
      <h1 className="text-[120px] font-extrabold text-blue-600 mb-0 animate-bounce">
        404
      </h1>

      <p className="text-2xl font-semibold my-2">Oops! Page Not Found</p>

      <p className="text-base text-slate-500 max-w-[400px] mb-8">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track.
      </p>

      <Link
        to="/"
        className="px-7 py-3 bg-blue-600 text-white text-base font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
}
