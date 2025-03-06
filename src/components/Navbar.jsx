import { useContext } from 'react';
import { Link} from 'react-router';
import AuthContext from '../contexts/AuthContexts';

const Navbar = () => {
  const { isLogin, login, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow sticky top-0 p-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/1080x1080" alt="Logo" className="h-8" />
        </div>

        {/* Menu di tengah */}
        <ul className="flex space-x-8 mx-auto">
          <li>
            <Link
              className={`text-black pb-1 px-1 pt-5  text-sm font-medium hover:border-b-gray-600 hover:border-b-2 `}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`text-black pb-1 px-1 pt-5  text-sm font-medium hover:border-b-gray-600 hover:border-b-2 `}
              to="/setting"
            >
              Setting
            </Link>
          </li>
          <li>
            <Link
              to={isLogin ? "/profile" : "/"}
              className={`text-black pb-1 px-1 pt-5  text-sm font-medium hover:border-b-gray-600 hover:border-b-2 
                ${isLogin ? '' : 'opacity-60 cursor-not-allowed'}`}
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Tombol Login/Logout di kanan */}
        <div className="flex items-center space-x-4">
          {isLogin ? (
            <button
              onClick={logout}
              className="w-20 text-black bg-white px-4 py-2 rounded-lg text-sm font-medium border-2 hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="w-20 text-black bg-white px-4 py-2 rounded-lg text-sm font-medium border-2 hover:bg-gray-100"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
