import { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light"); //"light" hoặc "dark"

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
export function useTheme() {
    return useContext(ThemeContext);
}