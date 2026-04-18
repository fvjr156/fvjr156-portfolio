import { Sun, Moon } from "react-feather";

export default function BtnThemeToggle({ theme, setTheme }) {
    return (
        <button
            className={`
                bg-transparent rounded-full border-none text-text
                cursor-pointer
                p-2
            `}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            {theme === "light" ? <Moon size={20} strokeWidth={2} /> : <Sun size={20} strokeWidth={2} />}
        </button>
    );
}