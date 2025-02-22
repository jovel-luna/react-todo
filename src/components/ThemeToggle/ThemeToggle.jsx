import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import "../../App.css";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={theme}>
            Current Theme: {theme}
        </button>
    );
};

export default ThemeToggle;