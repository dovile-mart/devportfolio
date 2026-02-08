

const navLinks = [
    {href: "about", label: "About"},
    {href: "projects", label: "Projects"},
    {href: "experience", label: "Experience"},
    {href: "testimonials", label: "Testimonials"},
]

export const Navbar = () => { 
    return (
        <header>
            <nav>
                <a>
                    DM<span>.</span>
                </a>

                <div>
                    { /** Desktop Nav */}
                    <div>
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}