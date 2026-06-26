import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import ThongBaoLoi from './ThongBaoLoi';

function Contact() {
    const { theme } = useTheme();
    const [form, setForm] = useState({ ten: "", email: "", lienLac: ""});
    const [loi, setLoi] = useState({});
    const [thanhCong, setThanhCong] = useState(false);

    function capNhat(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function xuLySubmit(e) {
        e.preventDefault();
        const loiMoi = {};
        if (!form.ten) loiMoi.ten = "Vui lòng nhập tên";
        if (!form.email.includes("@")) loiMoi.email = "Email không hợp lệ";
        if (!form.lienLac) loiMoi.lienLac = "Vui lòng nhập tin nhắn";
        if (Object.keys(loiMoi).length > 0) { setLoi(loiMoi); return; }
        setThanhCong(true);
    }

    return (
        <div className={`min-h-screen px-6 py-16 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">Liên hệ</h2>
                {thanhCong && <p className="text-green-600 font-medium mb-4">Gửi thành công! Mình sẽ phản hồi sớm 🎉</p>}
                <form onSubmit={xuLySubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="ten" className="block text-sm font-medium mb-1">Tên</label>
                        <input id="ten" name="ten" value={form.ten} onChange={capNhat}
                            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 ${theme === "dark" ? "bg-gray-800 border-gray-600" : "border-gray-300"}`}
                            placeholder="Nhập ten..." />
                        <ThongBaoLoi loi={loi.ten} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input id="email" name="email" value={form.email} onChange={capNhat}
                            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 ${theme === "dark" ? "bg-gray-800 border-gray-600" : "border-gray-300"}`}
                            placeholder="Nhập email..." />
                        <ThongBaoLoi loi={loi.email} />
                    </div>
                    <div>
                        <label htmlFor="lienLac" className="block text-sm font-medium mb-1">Tin nhắn</label>
                        <textarea id="lienLac" name="lienLac" value={form.lienLac} onChange={capNhat}
                            rows={4}
                            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 ${theme === "dark" ? "bg-gray-800 border-gray-600" : "border-gray-300"}`}
                            placeholder="Nhập tin nhắn..." />
                        <ThongBaoLoi loi={loi.lienLac} />
                    </div>
                    <Button type="submit">Gửi liên hệ</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact;