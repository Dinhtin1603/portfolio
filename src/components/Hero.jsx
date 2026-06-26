import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Hero() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-[80vh] flex flex-col items-center justify-center text-center px-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <h1 className="text-5xl font-bold mb-4">
                Xin chào, mình là <span className="text-blue-600">Tín</span> 👋
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-lg">
                Frontend Developer đang học React + Tailwind CSS
            </p>
            <div className="flex gap-4">
                <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium">
                    Xem dự án
                </Link>
                <Link to="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all font-medium">
                    Liên hệ tôi
                </Link>
            </div>
        </div>
    );
}

export default Hero;