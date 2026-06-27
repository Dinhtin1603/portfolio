import { useTheme } from '../context/ThemeContext';

function Footer() {
    const { theme } = useTheme();

    return (
        <footer className={`text-center py-6 text-sm text-gray-500 border-t ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
            © 2026 Tín Dev — Làm bằng React + Tailwind CSS ❤️
        </footer>
    );
}

export default Footer;