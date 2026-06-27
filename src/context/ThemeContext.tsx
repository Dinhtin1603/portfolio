import { createContext, useState, useContext } from 'react';

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme
    doiTheme: () => void //hàm không nhận tham số, không trả về gì
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light")

    function doiTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, doiTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

//Hook tiện lợi - dùng thay cho useContext(ThemeContext)
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme phải dùng bên trong ThemeProvider");
    return context;
}