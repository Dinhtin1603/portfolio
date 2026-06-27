import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function NavBar() {
    const { theme, doiTheme} = useTheme();

    return (
        <nav className={`px-6 py-4 flex justify-between items-center shadow-sm ${theme === "dark" ? "bg-gray-900 text-white" : "text-gray-900"}`}>
            <span className="font-bold text-xl text-blue-600">Tín Dev</span>
            <div className="flex items-center gap-6">
                <Link to="/" className="hover:text-blue-500 transition-colors">Trang chủ</Link>
                <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
                <Link to="/projects" className="hover:text-blue-500 transition-colors">Dự án</Link>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">Liên hệ</Link>
                <button 
                    onClick={doiTheme}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;