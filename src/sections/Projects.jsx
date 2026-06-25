import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
    title: "Softala project",
    description:
      "This project is a prototype web application designed to provide a shared platform for companies, transport operators and processing facilities to manage, reserve and invoice pallets used in battery recycling logistics. It replaces previously inconsistent working methods across different stakeholders and is built using JHipster, which provides built-in features such as user management, database integration, and security.",
    image: "./projects/softala.png",
    tags: ["React", "JHipster", "TypeScript", "Java", "SpringBoot", "H2 database", "REST API", "Figma", "Heroku"],
    link: undefined,
    github: "https://github.com/softalaRyhma2/SR2",
    },
    {
    title: "MTT project",
    description:
      "MTT - 'Mitä tänään tehtäisiin?' - is a web application developed as a part of a software project university course. The application helps users discover events and activities based on weather conditions, location and time. The platform combines user-created and open-data events, allowing users to find relevant activities nearby, while registered users can create and manage their own events.",
    image: "./projects/mtt.png",
    tags: ["React", "JavaScript", "Java", "SpringBoot", "Swagger UI", "H2 database", "REST API", "Figma"],
    link: undefined,
    github: "https://github.com/softalaRyhma2/SR2",
    },
    {
    title: "Population Graphs",
    description:
      "A web application that visualizes population data from the World Bank API. Developed during the #mimmitkoodaa MOOC course to practice API integration, JavaScript and interactive data visualization.",
    image: "./projects/population-graphs.png",
    tags: ["HTML", "CSS", "JavaScript", "REST API", "Data visualization"],
    link: "https://dovile-mart.github.io/PopulationGraphs/",
    github: "https://github.com/dovile-mart/PopulationGraphs",
    },
    {
    title: "Food App",
    description:
      "A recipe application built with React and MUI for browsing, adding, editing and deleting recipes. Developed as a personal frontend course project to practice React fundamentals and working with open data.",
    image: "./projects/food-app.png",
    tags: ["React", "JavaScript", "Node.js", "MUI", "REST API"],
    link: undefined,
    github: "https://github.com/dovile-mart/food-app",
  },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            { /** Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                { /** Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Here are a few projects I've worked on recently.
                    </p>
                </div>
                { /** Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t
                                from-card via-card/50 to-transparent opacity-60"
                                />
                                { /* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                                    {project.link &&
                                        (<a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                        </a>)
                                    }
                                    {project.github && (
                                        <a href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5" />
                                        </a>)
                                    }
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.link &&
                                        (<a href={project.link} target="_blank">
                                            <ArrowUpRight
                                        className="w-5 h-5 text-muted-foreground group-hover:text-primary
                                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                    />
                                </a>)}
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border 
                                            border-border/50 text-muted-foreground hover:border-primary/50
                                            hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                { /* View All CTA Button 
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>*/}
            </div>
        </section>
    );
};
