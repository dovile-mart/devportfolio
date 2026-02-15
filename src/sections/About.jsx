import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I'm learning to write clean and maintainable code.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "I quickly grasp new concepts and technologies.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "I enjoy collaborating with others to achieve common goals.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I thrive on finding solutions to complex challenges.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a motivated junior developer currently seeking my first
                opportunity in the tech industry. I'm especially interested in
                full-stack development, but I'm open to any role where I can
                grow as an IT professional and contribute to real-world
                projects.
              </p>
              <p>
                I enjoy building modern applications and turning ideas into
                clean, functional solutions. My experience is mainly focused on
                React, JavaScript and Java, working with both front-end
                interfaces and backend logic. I'm continuously learning and
                improving my skills to become a well-rounded developer.
              </p>
              <p>
                I'm eager to join a team where I can contribute to real-world
                projects, learn from experienced professionals, deepen my
                technical skills and grow into well-rounded IT professional.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I strive to create applications that solve real-world problems,
                improve user experiences and allow me to grow as a skilled and
                adaptable IT professional."
              </p>
            </div>
            </div>
                  
            {/*Right Column*/}
                  <div className="grid sm:grid-cols-2 gap-6">
                      {highlights.map((item, index) => (
                          <div>
                              <div><item.icon /></div>
                              <h3>{item.title}</h3>
                              <p>{ item.description}</p>
                          </div>
                      ))}
            </div>
        </div>
      </div>
    </section>
  );
};
