import React, { useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [useDetails , setUserDetails] = useState<any>({});

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    setUserDetails(storedUser);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to the Application{" "}
        </h1>
        <h6 className="text-2xl font-bold block break-words text-md text-gray-600 mt-3">{useDetails.userInfo?.email}</h6>

        <button
          onClick={handleLogout}
          className="mt-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-l from-red-500 via-red-600 to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
