export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-12">
          <svg
            className="w-8 h-8 text-zinc-400"
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
            <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-10a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tighter leading-tight">
            Experiencia Laboral
          </h2>
        </div>

        <div className="space-y-8">
          {/* Experiencia 1 */}
          <div className="group relative pl-8 border-l-2 border-zinc-800 hover:border-zinc-600 transition-colors duration-300">
            <div className="absolute w-4 h-4 bg-zinc-800 group-hover:bg-white rounded-full -left-2 top-2 transition-colors duration-300"></div>
            <div className="pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  Soporte Técnico de Telecomunicaciones
                </h3>
                <span className="text-sm text-zinc-400 font-medium">
                  Oct 2024 - Feb 2025
                </span>
              </div>
              <p className="text-zinc-400 mb-3">Empresa Tecnológica</p>
              <p className="text-zinc-300 leading-relaxed">
                Brindé soporte técnico en telecomunicaciones, resolviendo
                problemas de clientes y mejorando mis habilidades profesionales.
              </p>
            </div>
          </div>
          <div className="group relative pl-8 border-l-2 border-zinc-800 hover:border-zinc-600 transition-colors duration-300">
            <div className="absolute w-4 h-4 bg-zinc-800 group-hover:bg-white rounded-full -left-2 top-2 transition-colors duration-300"></div>
            <div className="pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  Pasante en Desarrollo Web
                </h3>
                <span className="text-sm text-zinc-400 font-medium">
                  2022 - 2023
                </span>
              </div>
              <p className="text-zinc-400 mb-3">Universidad UASD</p>
              <p className="text-zinc-300 leading-relaxed">
                Durante este periodo, trabajé en el desarrollo web. Implementé
                interfaces responsivas y optimicé el rendimiento de las
                aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
