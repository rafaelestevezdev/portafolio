export function Hero() {
  const handleGmailClick = () => {
    const subject = "Contacto desde tu portafolio";
    const body = `Hola Rafael,

Me gustaría contactarte para discutir una oportunidad laboral.

Mi nombre es: [Tu nombre aquí]
Email: [Tu email aquí]

Mensaje:
[Escribe tu mensaje aquí]

Saludos cordiales`;

    // URL para Gmail web
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rafaelestevezd@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abrir Gmail web en nueva pestaña
    window.open(gmailUrl, "_blank");
  };

  return (
    <div
      className="flex flex-col justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="/public/profile/profile.jpeg"
            alt="Rafael Estévez"
            className="w-20 h-20 rounded-full object-cover ring-1 ring-gray-300 dark:ring-zinc-800"
          />
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-full">
            Disponible para trabajar ⚡
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 leading-tight">
          Hey, soy{" "}
          <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900 dark:from-zinc-200 dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
            rafadev
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-zinc-400 mb-8 max-w-2xl leading-relaxed">
          <strong className="text-gray-900 dark:text-white font-semibold">
            Ingeniero en Sistemas
          </strong>{" "}
          de República Dominicana, especializado en desarrollo web moderno
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Nuevo botón para Gmail Web */}
          <button
            onClick={handleGmailClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-600 dark:text-zinc-300 bg-transparent hover:bg-gray-100 dark:hover:bg-zinc-900 border border-gray-300 dark:border-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v.001L12 8.773l6.545-4.951v-.001h3.819c.904 0 1.636.732 1.636 1.636Z" />
            </svg>
            Contactame
          </button>

          <a
            href="https://www.linkedin.com/in/rafael-estevez-dur%C3%A1n-445903290/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-600 dark:text-zinc-300 bg-transparent hover:bg-gray-100 dark:hover:bg-zinc-900 border border-gray-300 dark:border-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
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
