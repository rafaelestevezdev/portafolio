export function About() {
  return (
    <section id="about" className="py-20 bg-black">
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
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          </svg>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tighter leading-tight">
            Sobre Mí
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Hola, soy{" "}
              <strong className="text-white font-semibold">
                Rafael Estévez
              </strong>
              , estudiante de Ingeniería en Sistemas y Desarrollador Web
              apasionado por la creación de aplicaciones modernas y responsivas.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Me especializo en el desarrollo frontend utilizando tecnologías
              modernas como React, JavaScript y Tailwind CSS. Disfruto
              transformando ideas creativas en soluciones digitales funcionales
              y atractivas.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Cuando no estoy programando, me gusta mantenerme actualizado con
              las últimas tendencias tecnológicas, contribuir a proyectos open
              source y compartir conocimiento con la comunidad de
              desarrolladores.
            </p>
          </div>

          {/* Foto */}
          <div className="flex justify-center lg:justify-end rotate-4 hover:rotate-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="/images/profile.png"
              alt="Rafael Estévez"
              className="w-80 h-80 rounded-2xl object-cover ring-1 ring-zinc-800 shadow-2xl border-4 border-white/65"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
