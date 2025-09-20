import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark" // default to dark
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="relative bg-gray-900/95 backdrop-blur-md z-50 transition-colors duration-300">
      <div className="flex justify-between items-center py-4 px-6 sm:px-12 xl:px-24">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-extrabold text-white tracking-tight hover:text-primary transition-colors cursor-pointer"
        >
          BlogAI
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            Signup
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors duration-200"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
