import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Badge from "./Badge";

// Datos separados del componente
const projectsData = [
  {
    id: 1,
    name: "Todo-App",
    description:
      "Aplicacion de lista de tareas minimalista con funcionalidad de agregar, eliminar y marcar tareas como completadas. Interfaz limpia y responsiva.",
    image: "/images/projects/todo-app.png",
    technologies: ["React", "Tailwind CSS"],
    demoUrl: "https://todo-app-minimalist.vercel.app/",
    githubUrl: "https://github.com/rafaelestevezdev/todo-app",
    featured: true,
  },
  {
    id: 2,
    name: "Library-Book",
    description:
      "Aplicacion de gestion de libros para bibliotecas. Permite agregar, eliminar y editar libros, interfaz intuitiva y facil de usar.",
    image: "/images/projects/library-app.png",
    technologies: ["React", "Tailwind CSS"],
    demoUrl: "https://library-book-minimalist.vercel.app/",
    githubUrl: "https://github.com/rafaelestevezdev/library-book",
    featured: true,
  },
];

// Componente para el header de la sección
const SectionHeader = () => (
  <div className="flex items-center gap-4 mb-16">
    <div className="flex items-center justify-center w-12 h-12">
      <FaCode className="w-6 h-6 text-gray-600 dark:text-zinc-400" />
    </div>
    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tighter leading-tight">
      Proyectos
    </h2>
  </div>
);

// Componente para la imagen del proyecto
const ProjectImage = ({ image, name }) => {
  if (!image) return null;
  
  return (
    <div className="w-full lg:w-1/2 flex-shrink-0">
      <div className="aspect-video bg-gray-200 dark:bg-zinc-800 rounded-xl overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

// Componente para las tecnologías
const TechnologiesList = ({ technologies }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-3 uppercase tracking-wider flex items-center gap-2">
      <FaCode className="w-3 h-3" />
      Tecnologías:
    </h4>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge key={tech} variant="tech">
          {tech}
        </Badge>
      ))}
    </div>
  </div>
);

// Componente para los enlaces
const ProjectLinks = ({ demoUrl, githubUrl }) => (
  <div className="hidden lg:flex items-center gap-6 pt-4">
    {demoUrl && (
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-sm font-medium transition-all duration-200 group/link"
      >
        <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
        Vista Previa
      </a>
    )}
    
    {githubUrl && (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-zinc-300 text-sm font-medium transition-all duration-200 group/link"
      >
        <FaGithub className="w-3 h-3 group-hover/link:scale-110 transition-transform" />
        Ver código
      </a>
    )}
  </div>
);

// Componente para el contenido del proyecto
const ProjectContent = ({ project }) => (
  <div className="flex-1 space-y-6">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {project.name}
      </h3>
      <p className="text-gray-600 dark:text-zinc-400 text-base leading-relaxed">
        {project.description}
      </p>
    </div>
    
    <TechnologiesList technologies={project.technologies} />
    <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
  </div>
);

// Componente para un proyecto individual
const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const flexDirection = isEven ? "lg:flex-row" : "lg:flex-row-reverse";
  
  return (
    <div className={`flex flex-col ${flexDirection} gap-8 items-center`}>
      <ProjectImage image={project.image} name={project.name} />
      <ProjectContent project={project} />
    </div>
  );
};

// Componente principal
export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <SectionHeader />
        
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}