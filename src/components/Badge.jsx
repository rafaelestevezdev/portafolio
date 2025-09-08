import {
  FaCode,
  FaStar,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

// Mapeo de tecnologías a iconos
const techIcons = {
  React: <FaReact className="text-blue-400" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  Vite: <SiVite className="text-purple-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  Database: <FaDatabase className="text-gray-400" />,
};

const Badge = ({ children, variant = "default", className = "" }) => {
  const icons = {
    default: <FaCode className="w-3 h-3 mr-1.5" />,
    featured: <FaStar className="w-3 h-3 mr-1.5" />,
    tech: null, // Los iconos tech se manejan separadamente
  };

  const variants = {
    default:
      "bg-gray-200 dark:bg-zinc-800/50 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-300 dark:hover:bg-zinc-800",
    featured:
      "bg-gradient-to-r from-amber-100 dark:from-amber-900/50 to-yellow-100 dark:to-yellow-900/50 border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-300",
    tech: "bg-gray-100 dark:bg-zinc-800/30 border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700/50 hover:border-gray-400 dark:hover:border-zinc-500",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium border rounded-full transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {variant === "tech" && techIcons[children] && (
        <span className="w-3 h-3 mr-1.5 flex items-center">
          {techIcons[children]}
        </span>
      )}
      {variant !== "tech" && icons[variant]}
      {children}
    </span>
  );
};

export default Badge;
