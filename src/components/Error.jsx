const Error = ({ message = "Something went wrong.", onRetry }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-10">
      {/* Icon */}
      <div className="bg-red-100 p-5 rounded-full mb-6">
        <svg
          className="w-10 h-10 text-red-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9
               4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Oops! Something went wrong
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-md">
        {message}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          Retry
        </button>

        <button
          onClick={onRetry}
          className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          Try Again
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-8">Error Code: 500</p>
    </div>
  );
};

export default Error;
