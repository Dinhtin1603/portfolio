import { useTheme } from '../context/ThemeContext';

interface DuAn {
    id: number
    ten: string 
    moTa: string 
    congNghe: string[] //mảng string
    link: string
}

interface ProjectCardProps {
    du_an: DuAn //dùng lại interface DuAn vừa tạo
}

const dsDAn = [
    {
        id: 1,
        ten: "To-do List",
        moTa: "Ứng dụng quản lý công việc với localStorage, thêm/xoá/đánh dấu hoàn thành.",
        congNghe: ["JavaScript", "HTML/CSS"],
        link: "#"
    },
    {
        id: 2,
        ten: "Todo React",
        moTa: "To-do List làm lại bằng React - useState, localStorage, component.",
        congNghe: ["React", "Tailwind CSS"],
        link: "#"
    },
    {
        id: 3,
        ten: "Portfolio",
        moTa: "Trang portfolio cá nhân responsive với dark mode.",
        congNghe: ["React", "Tailwind CSS", "React Router"],
        link: "#"
    },
];

function ProjectCard({ du_an }: ProjectCardProps) {
    return (
        <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-bold text-blue-600 mb-2">{du_an.ten}</h3>
            <p className="text-gray-500 text-sm mb-4">{du_an.moTa}</p>
            <div className="flex flex-wrap gap-2">
                {du_an.congNghe.map((cn) => (
                    <span key={cn} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        {cn}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Projects() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen px-6 py-16 max-w-3xl mx-auto ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Dự án</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dsDAn.map((da) => (
                    <ProjectCard key={da.id} du_an={da} />
                ))}
            </div>
        </div>
    );
}

export default Projects;