export function Hero() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="/images/profile.png"
            alt="Rafael Estévez"
            className="w-18 h-18 rounded-full object-cover ring-1 ring-zinc-800"
          />
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full">
            Disponible para trabajar ⚡
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
          Hey, soy{" "}
          <span className="bg-gradient-to-r from-zinc-200 via-zinc-100 to-white bg-clip-text text-transparent">
            rafadev
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
          <strong className="text-white font-semibold">
            Ingeniero en Sistemas
          </strong>{" "}
          de República Dominicana, especializado en desarrollo web moderno
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:rafaelestevezd@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
              <path d="M3 6l9 6l9 -6"></path>
              <path d="M15 18h6"></path>
              <path d="M18 15l3 3l-3 3"></path>
            </svg>
            Contáctame
          </a>
          <a
            href="https://linkedin.com/in/rafaelestevez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-300 bg-transparent hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-600 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
