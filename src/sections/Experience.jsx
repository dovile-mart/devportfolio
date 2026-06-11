import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const experiences = [
    /*{
        period: "2023 - Present",
        role: "Role 1",
        company: "Company 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: ["React", "JavaScript", "Java", "Node.js"],
        current: true,
    },*/
    {
        period: "Jan 2025 - Jun 2025",
        role: "Trainee",
        company: "Haaga-Helia University of Applied Sciences",
        description: "Worked as a trainee in Software Development and ICT Infrastructure & Cloud Services departments, focusing on learning environments in education. Gained experience in testing systems, supporting teachers and contributing to development discussions while strengthening skills in teamwork, communication and project management.",
        technologies: ["Technical documentation", "Cloud services", "Computer hardware", "Virtualization", "JavaScript", "Java"],
        current: false,
    },
    {
        period: "Nov 2023",
        role: "Event volunteer",
        company: "Finnish Software Testing Board FiSTB",
        description: "Assisted event organizers and participants at Testing Assembly 2023 on November 16 to ensure smooth event execution.",
        technologies: ["Teamwork", "Customer service", "Communication skills", "Organizational skills", "Adaptability"],
        current: false,
    },
    {
        period: "Jan 2022 - Dec 2025",
        role: "Student, Business Information Technology (BBA)",
        company: "Haaga-Helia University of Applied Sciences",
        description: "Majoring in software development",
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Python", "Java", "Spring Boot", "Relational Databases", "Full-Stack Development", "Software Testing", "Scrum", "Requirements Management", "Business Administration", "IT & Business Integration", "Project Management"],
        current: false,
    },
        {
        period: "Jun 2021 - Jun 2024",
        role: "Founding member of parent association",
        company: "Vanhempainyhdistys PälLi ry",
        description: "Built a parent community across two schools, managed social media channels and organized meetings for parents and members.",
        technologies: ["Teamwork", "Communication skills", "Organizational skills"],
        current: false,
    },
        {
        period: "Jun 2021 - Feb 2023",
        role: "Childcare Assistant & Early Childhood Educator",
        company: "Piccolo Oy",
        description: "Planning and implementing early childhood education activities for children aged 1–5",
        technologies: ["Teamwork", "Pedagogical planning", "Communication skills", "Interpersonal skills"],
        current: false,
    },
        {
        period: "Feb 2019 - Mar 2019",
        role: "Trainee",
        company: "City of Porvoo",
        description: "IT support and school assistant duties, including iPad setup, maintenance of Windows devices, assisting teachers and students, preparing teaching materials and supporting the use of Chromebooks and internet services.",
        technologies: ["Digital skills", "Problem-solving", "Time management", "Communication skills"],
        current: false,
    },
    {
        period: "Aug 2011 - Aug 2018",
        role: "Supervisor, Housekeeper",
        company: "Haikko Manor & Spa",
        description: "Managed housekeeping operations in a hotel environment, including staff supervision, quality inspections, training new employees and handling guest inquiries. Gained experience with hotel management systems and administrative tasks such as scheduling, documentation, and collaboration with management teams.",
        technologies: ["Teamwork", "Leadership", "Organizational skills", "Customer service", "Communication skills"],
        current: false,
    }
];

export const Experience = () => { 
    const [expanded, setExpanded] = useState({});
    const handleExpandClick = (index) => {
    setExpanded((prev) => ({
        ...prev,
        [index]: !prev[index],
    }));
};
    return (
        <section
            id="experience"
            className="py-32 relative overflow-hidden"
        >
            <div
                className="absolute top-1/2 left-1/4 w-96
                h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span
                        className="text-secondary-foreground text-sm
                        font-medium tracking-wider uppercase animate-fade-in"
                    >
                        Career Journey</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold font-bold
                        mt-4 mb-6 animate-fade-in animation-delay-100
                        text-secondary-foreground"
                    >
                        Experience that <span className="font-serif italic font-normal text-white">
                            speaks volumes.
                        </span>
                    </h2>
                    <p
                        className="text-muted-foreground
                        animate-fade-in animation-delay-200"
                    >
                        My career journey has been a dynamic blend of learning,
                        growth, and hands-on experience.
                    </p>
                </div>
                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                                
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                                </div>
                                
                                {/* Experience Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${
                                        index % 2 === 0
                                            ? "md:pr-16 md:text-right"
                                            : "md:col-start-2 md:pl-16"
                                        }`}>
                                    <div
                                        className={`glass p-6 rounded-2-xl border border-primary/30
                                         hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        {expanded[index] && (
                                            <div>    
                                                <p className="text-sm text-muted-foreground mt-4">
                                                    {exp.description}
                                                </p>

                                                <div className={`flex flex-wrap gap-2 mt-4 ${ 
                                                    index % 2 === 0 ? "md:justify-end" : ""
                                                    }`}
                                                >
                                                    {exp.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <button onClick={() => handleExpandClick(index)}
                                            className="mt-2 text-primary text-sm font-bold hover:underline"
                                        >
                                            {expanded[index] ?  <ChevronUpIcon /> :  <ChevronDownIcon />}
                                        </button>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    );
}