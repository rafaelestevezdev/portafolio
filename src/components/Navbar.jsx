export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <ul className="flex justify-center items-center gap-8 py-4">
          <li>
            <a
              href="#experience"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
