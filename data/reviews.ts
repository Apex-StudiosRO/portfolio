export interface Review {
    id: string;
    name: string;
    role?: string;
    company?: string;
    rating: number;
    comment: string;
    avatar?: string;
    isAnonymous?: boolean;
}

export const reviews: Review[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc",
        rating: 5,
        comment: "Matei delivered an exceptional website that exceeded all our expectations. His attention to detail and modern design approach made our brand stand out. Highly recommend!",
        avatar: "/reviews/avatar1.jpg"
    },
    {
        id: "2",
        name: "Anonymous",
        rating: 5,
        comment: "Working with this developer was a great experience. The project was completed on time, and the quality was outstanding. Very professional and responsive to feedback.",
        isAnonymous: true
    },
    {
        id: "3",
        name: "Michael Chen",
        role: "Marketing Director",
        company: "Digital Solutions",
        rating: 5,
        comment: "Incredible work! The website is fast, beautiful, and exactly what we needed. The developer's expertise in modern web technologies really shows in the final product.",
        avatar: "/reviews/avatar2.jpg"
    },
    {
        id: "4",
        name: "Emily Rodriguez",
        role: "Founder",
        company: "Creative Studio",
        rating: 4,
        comment: "Great developer with fresh ideas and a keen eye for design. The project turned out beautifully and our clients love the new website. Will definitely work together again!",
        avatar: "/reviews/avatar3.jpg"
    },
    {
        id: "5",
        name: "Anonymous",
        rating: 5,
        comment: "Professional, talented, and easy to work with. The final product was polished and exceeded expectations. Communication was excellent throughout the entire process.",
        isAnonymous: true
    },
    {
        id: "6",
        name: "David Thompson",
        role: "Product Manager",
        company: "InnovateCo",
        rating: 5,
        comment: "Outstanding developer! The attention to detail and commitment to quality is impressive. Our website is now faster, more modern, and our conversion rates have increased significantly.",
        avatar: "/reviews/avatar4.jpg"
    }
];
