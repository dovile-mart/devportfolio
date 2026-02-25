import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        author: "John Doe",
        role: "CEO, Company",
        avatar: "#",
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        author: "Jane Smith",
        role: "CTO, TechCorp",
        avatar: "#",
    }
];

export const Testimonials = () => { 
    return (
        <section
            id="testimonials"
            className="py-32 relative overflow-hidden"
        >
             <div
                className="absolute top-1/2 left-1/2 
                w-[800px] h-[800px] bg-primary/5
                rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="text-secondary-foreground
                        text-sm font-medium tracking-wider
                        uppercase animate-fade-in"
                    >
                        What People Say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4
                        mb-6 animate-fade-in animation-delay-100
                        text-secondary-foreground"
                    >
                        Kind words from {" "}
                        <span className="font-serif italic font-normal text-white">
                            amazing people.
                        </span>
                    </h2>
                </div>
                {/* Testimonials Carousel */}
                <div>
                    <div>
                        {/* Main testimonial */}
                        <div>
                            <div>
                                <Quote />
                            </div>
                            <blockquote>
                                "{testimonials[0].quote}"
                            </blockquote>
                            <div>
                                <img
                                    src={testimonials[0].avatar}
                                    alt={testimonials[0].author}
                                />
                                <div>
                                    <div>
                                        {testimonials[0].author}
                                    </div>
                                    <div>
                                        {testimonials[0].role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}