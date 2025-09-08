import ThemeToggle from './ThemeToggle.jsx';

export function Navbar() {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50 bg-white/90 dark:bg-black/80 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1"></div>
          
          <ul className="flex justify-center items-center gap-8">
            <li>
              <button
                onClick={() => handleScrollTo('experience')}
                className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 tracking-wide cursor-pointer"
              >
                Experiencia
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo('projects')}
                className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 tracking-wide cursor-pointer"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo('about')}
                className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 tracking-wide cursor-pointer"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo('contact')}
                className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Contacto
              </button>
            </li>
          </ul>
          
          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}