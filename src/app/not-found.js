import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-2xl font-semibold text-gray-600">Page Not Found</p>
          <p className="mt-4 text-lg text-gray-500">
            Sorry, the page you are looking for might be in another castle.
          </p>
          <Link
            href="/"
            className="w-[140px] inline-block px-6 py-3 mt-4 text-lg font-semibold text-white shadow-md border-orange-600 rounded-full orange-btn z-50"
          >
            HOME
            <span className="bg"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
