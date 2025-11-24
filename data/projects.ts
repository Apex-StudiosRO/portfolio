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

export const projects: Project[] = [];
