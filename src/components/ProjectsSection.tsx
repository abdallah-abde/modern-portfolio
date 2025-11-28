import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Appilisious Website",
    description:
      "Appilisious is a demo website showcasing a beautiful landing page. It is built using HTML, CSS, and JavaScript. The website is designed to be responsive and providing a nice user experience across devices. It is build as a training project to enhance my skills in web development.",
    image: "/projects/appilicous.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://abdallah-abde.github.io/appilicous/",
    githubUrl: "https://github.com/abdallah-abde/appilicous",
  },
  // {
  //   id: 2,
  //   title: "Appilisious",
  //   description: "A beautiful landing page using React & tailwind",
  //   image: "/projects/appilicous.png",
  //   tags: ["React", "Tailwind", "Superbase"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "Appilisious",
  //   description: "A beautiful landing page using React & tailwind",
  //   image: "/projects/appilicous.png",
  //   tags: ["React", "Tailwind", "Superbase"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Fearured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="">
                <div className="px-6 py-4 flex flex-wrap gap-2 mb-4 border-b">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="px-6 pb-4 pt-2 text-muted-foreground/80 text-sm mb-4 text-left border-b">
                  {project.description}
                </p>

                <div className="px-6 pb-4 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      title={`View ${project.title} Demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      title={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/abdallah-abde"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
