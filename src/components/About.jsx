import { useTheme } from '../context/ThemeContext';

function About() {
    const { theme } = useTheme();

    const kyNang = ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Git"];

    return (
        <div className={`min-h-screen px-6 py-16 max-w-2xl mx-auto ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Về tôi</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
                Mình là Tín, đang học lập trình frontend từ đầu. Đã hoàn thành lộ trình HTML/CSS, JavaScript và dang vững React + Tailwind CSS. Thích xây dựng giao diện đẹp và dễ dùng.
            </p>

            <h3 className="text-xl font-semibold mb-4">Kỹ năng</h3>
            <div className="flex flex-wrap gap-3">
                {kyNang.map((kn) => (
                    <span key={kn} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        {kn}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default About;