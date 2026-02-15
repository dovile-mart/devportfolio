import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: "I'm learning to write clean and maintainable code."
    },
    {
        icon: Rocket,
        title: 'Fast Learner',
        description: "I quickly grasp new concepts and technologies."
    },
    {
        icon: Users,
        title: 'Team Player',
        description: "I enjoy collaborating with others to achieve common goals."
    },
    {
        icon: Lightbulb,
        title: 'Problem Solver',
        description: "I thrive on finding solutions to complex challenges."
    }
    
];
export const About = () => { 
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div>
                <div>
                    {/*Left Column*/}
                    <div>
                        <span>About Me</span>
                    </div>
                    <h2>
                        Building the future,
                        <span> one component at a time.</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}