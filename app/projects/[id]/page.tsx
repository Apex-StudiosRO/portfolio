import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Button from "@/components/Button";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCalendar, FiClock, FiUser, FiTag } from "react-icons/fi";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen w-screen bg-background text-foreground">
            <div className="max-w-6xl mx-auto px-8 py-16">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-white/50 hover:text-blue-300 transition-colors mb-8">
                    <FiArrowLeft /> Back to Projects
                </Link>

                <div className="mt-8 mb-8">
                    <h1 className="text-5xl font-bold text-blue-300/90 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-white/60">
                        {project.description}
                    </p>
                </div>
                
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-blue-300/20 bg-blue-950/10 mb-12">
                    {project.url ? (
                        <iframe
                            src={project.url}
                            title={project.title}
                            className="w-full h-full"
                        />
                    ) : project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-9xl text-blue-300/40 font-bold">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                    <div className="p-6 bg-blue-300/5 border border-blue-300/15 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                            <FiTag /> Category
                        </div>
                        <div className="text-lg text-blue-300/90 font-semibold">{project.category}</div>
                    </div>
                    <div className="p-6 bg-blue-300/5 border border-blue-300/15 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                            <FiCalendar /> Year
                        </div>
                        <div className="text-lg text-blue-300/90 font-semibold">{project.year}</div>
                    </div>
                    {project.duration && (
                        <div className="p-6 bg-blue-300/5 border border-blue-300/15 rounded-lg">
                            <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                                <FiClock /> Duration
                            </div>
                            <div className="text-lg text-blue-300/90 font-semibold">{project.duration}</div>
                        </div>
                    )}
                    {project.role && (
                        <div className="p-6 bg-blue-300/5 border border-blue-300/15 rounded-lg">
                            <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                                <FiUser /> Role
                            </div>
                            <div className="text-lg text-blue-300/90 font-semibold">{project.role}</div>
                        </div>
                    )}
                </div>

                <div className="my-12">
                    <h3 className="text-3xl font-bold text-blue-300/90 mb-4">About This Project</h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                        {project.fullDescription}
                    </p>
                </div>
                <div className="my-12">
                    <h3 className="text-3xl font-bold text-blue-300/90 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-lg text-blue-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {project.features && project.features.length > 0 && (
                    <div className="my-12">
                        <h3 className="text-3xl font-bold text-blue-300/90 mb-4">Key Features</h3>
                        <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/70 pl-6 relative">
                                    <span className="absolute left-0 text-blue-300/60">→</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.challenges && project.challenges.length > 0 && (
                    <div className="my-12">
                        <h3 className="text-3xl font-bold text-blue-300/90 mb-4">Challenges & Solutions</h3>
                        <ul className="space-y-3">
                            {project.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/70 pl-6 relative">
                                    <span className="absolute left-0 text-blue-300/60">→</span>
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex flex-wrap gap-4 mt-12">
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="corners">
                                <span className="flex items-center gap-2">
                                    Visit Website <FiExternalLink />
                                </span>
                            </Button>
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">
                                <span className="flex items-center gap-2">
                                    View on GitHub <FiGithub />
                                </span>
                            </Button>
                        </a>
                    )}
                </div>

                <div className="mt-16 pt-8 border-t border-blue-400/20">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-white/50 hover:text-blue-300 transition-colors">
                        <FiArrowLeft /> Back to All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
