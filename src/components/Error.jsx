import { useNavigate } from "react-router";
import { TriangleAlert, RotateCcw, Home } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[75vh] flex justify-center items-center bg-base-100 px-4">
      <div className="w-full max-w-md text-center">
        <div className="bg-base-200 border border-base-300 text-base-content rounded-xl p-7 space-y-5">
          <TriangleAlert className="w-12 h-12 text-error mx-auto" />

          <h2 className="text-xl font-semibold text-base-content">
            Oops! Something Went Wrong
          </h2>

          <p className="text-sm text-base-content/70">
            We couldn’t complete the action. Try again or go back home.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/", { replace: true });
                }
              }}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} /> Try Again
            </button>

            <button
              onClick={() => navigate("/", { replace: true })}
              className="btn w-full flex items-center justify-center gap-2 bg-gray-600 text-white hover:bg-accent-focus"
            >
              <Home size={18} /> Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
