import { useState, useEffect } from "react";

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchFeaturedProjects() {
      try {
        // Lista de repositorios que quieres mostrar
        const featuredRepos = [
          {
            name: "Admin-Dashboard",
            image: "/images/projects/admin-dashboard.png",
          },
          {
            name: "mi-portafolio",
            image: "/images/projects/portfolio.png",
          },
          {
            name: "todo-app",
            image: "/images/projects/todo-app.png",
          },
          // Agrega más proyectos aquí
        ];

        console.log("Fetching projects:", featuredRepos);

        const projectPromises = featuredRepos.map(async (repo) => {
          console.log(`Fetching repo: ${repo.name}`);

          // Obtener datos básicos del repo
          const response = await fetch(
            `https://api.github.com/repos/rafaelestevezdev/${repo.name}`
          );
          const project = await response.json();

          console.log(`Response for ${repo.name}:`, project);

          // Obtener TODOS los lenguajes del repo
          const languagesResponse = await fetch(
            `https://api.github.com/repos/rafaelestevezdev/${repo.name}/languages`
          );
          const languages = await languagesResponse.json();

          console.log(`Languages for ${repo.name}:`, languages);

          // Combinar datos del API con imagen personalizada y todos los lenguajes
          return {
            ...project,
            customImage: repo.image,
            allLanguages: Object.keys(languages), // Array con todos los lenguajes
          };
        });

        const projects = await Promise.all(projectPromises);
        const validProjects = projects.filter((project) => !project.message);

        console.log("Final projects:", validProjects);
        setProjects(validProjects);
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    }
    fetchFeaturedProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-black">
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
            <path d="M7 8l-4 4l4 4"></path>
            <path d="M17 8l4 4l-4 4"></path>
            <path d="M14 4l-4 16"></path>
          </svg>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tighter leading-tight">
            Proyectos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-200 hover:scale-105"
            >
              {/* Vista previa/imagen del proyecto */}
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <img
                  src={
                    project.customImage ||
                    `/images/projects/${project.name}.png`
                  }
                  alt={`Vista previa de ${project.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    console.log(`Error cargando imagen: ${e.target.src}`);
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                  onLoad={() => console.log("Imagen cargada exitosamente")}
                />

                {/* Fallback si no hay imagen */}
                <div
                  className="w-full h-full flex items-center justify-center text-zinc-500 flex-col gap-2"
                  style={{ display: "none" }}
                >
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs text-center">
                    Sin imagen
                    <br />
                    disponible
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-white mb-3 tracking-wide">
                  {project.name}
                </h3>
                <p className="text-zinc-400 mb-4 line-clamp-3 leading-relaxed font-light">
                  {project.description || "No hay descripción disponible"}
                </p>

                <div className="flex items-center justify-between">
                  {/* Mostrar todos los lenguajes */}
                  <div className="flex flex-wrap gap-1">
                    {project.allLanguages && project.allLanguages.length > 0 ? (
                      project.allLanguages.slice(0, 3).map((lang) => (
                        <span
                          key={lang}
                          className="text-xs text-zinc-300 bg-zinc-800 px-2 py-1 rounded-full border border-zinc-700"
                        >
                          {lang}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded-full">
                        {project.language || "N/A"}
                      </span>
                    )}
                    {project.allLanguages &&
                      project.allLanguages.length > 3 && (
                        <span className="text-xs text-zinc-400 font-medium">
                          +{project.allLanguages.length - 3}
                        </span>
                      )}
                  </div>

                  {/* Enlaces */}
                  <div className="flex items-center gap-2">
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition-colors"
                        title="Ver demo"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition-colors"
                      title="Ver código"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
