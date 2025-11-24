// Sample project data - you can move this to a database or CMS later
export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    technologies: string[];
    category: string;
    year: string;
    duration?: string;
    role?: string;
    image?: string;
    url?: string;
    github?: string;
    features?: string[];
    challenges?: string[];
}

export const projects: Project[] = [
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        description: "A modern, interactive portfolio showcasing my work with 3D elements and smooth animations.",
        fullDescription: "This portfolio website was built to showcase my skills and projects in a unique and engaging way. It features custom 3D geometric shapes, particle effects, and smooth animations to create an immersive user experience. The site is fully responsive and optimized for performance.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "CSS Animations"],
        category: "Web Development",
        year: "2025",
        duration: "2 weeks",
        role: "Full Stack Developer",
        url: "https://rovs.online/",
        features: [
            "3D geometric shapes with CSS transforms",
            "Particle effects and light rays",
            "Custom button variants with unique styling",
            "Fully responsive design",
            "Smooth scroll animations",
            "Optimized performance"
        ],
        challenges: [
            "Creating smooth 3D animations with pure CSS",
            "Optimizing particle effects for performance",
            "Ensuring cross-browser compatibility"
        ]
    },
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        description: "A full-featured online store with shopping cart, payments, and admin dashboard.",
        fullDescription: "A comprehensive e-commerce solution built with modern web technologies. Features include product management, shopping cart functionality, secure payment processing, and an admin dashboard for managing inventory and orders.",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
        category: "Full Stack",
        year: "2024",
        duration: "6 weeks",
        role: "Full Stack Developer",
        image: "/projects/ecommerce.png",
        features: [
            "Product catalog with search and filters",
            "Shopping cart with session management",
            "Secure payment processing with Stripe",
            "Admin dashboard for inventory management",
            "Order tracking and history",
            "User authentication and profiles"
        ],
        challenges: [
            "Implementing secure payment processing",
            "Managing complex state across the application",
            "Optimizing database queries for performance"
        ]
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates and team features.",
        fullDescription: "A powerful task management application designed for teams. It allows users to create projects, assign tasks, set deadlines, and track progress in real-time. The app features a clean, intuitive interface and supports multiple workspaces.",
        technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Express"],
        category: "Web Application",
        year: "2024",
        duration: "4 weeks",
        role: "Full Stack Developer",
        image: "/projects/taskapp.png",
        features: [
            "Real-time collaboration with WebSockets",
            "Drag-and-drop task organization",
            "Team workspaces and permissions",
            "Deadline reminders and notifications",
            "Progress tracking and analytics",
            "Dark mode support"
        ],
        challenges: [
            "Implementing real-time sync across multiple clients",
            "Handling complex permission systems",
            "Optimizing WebSocket connections"
        ]
    },
    {
        id: "example-demo",
        title: "Example Demo Site",
        description: "A demonstration website showcasing modern web design principles and interactive elements.",
        fullDescription: "This is a demo website built to test iframe embedding and showcase various web technologies. It features a clean, modern design with interactive elements and demonstrates best practices in web development. The site is fully responsive and optimized for embedding.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        category: "Demo Project",
        year: "2025",
        duration: "1 week",
        role: "Frontend Developer",
        url: "https://example.com",
        features: [
            "Clean and modern interface",
            "Fully responsive design",
            "Interactive elements and animations",
            "Optimized for iframe embedding",
            "Cross-browser compatibility",
            "Fast loading times"
        ],
        challenges: [
            "Ensuring proper iframe embedding support",
            "Maintaining performance in embedded contexts",
            "Handling responsive design within iframe constraints"
        ]
    }
];
