import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    url?: string;
}

export default function ProjectCard({ id, title, description, technologies, image, url }: ProjectCardProps) {
    return (
        <Link href={`/projects/${id}`}>
            <div className="group flex flex-col bg-blue-300/[0.03] border border-blue-300/15 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-300/40 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(147,197,253,0.2)] cursor-pointer">
                <div className="relative w-full h-[250px] bg-blue-950/10 overflow-hidden">
                    {url ? (
                        <iframe
                            src={url}
                            title={title}
                            className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin"
                        />
                    ) : image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-900/20">
                            <span className="text-6xl text-blue-300/40 font-bold">
                                {title.charAt(0)}
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold flex items-center gap-2">
                            View Details <FiArrowRight />
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 p-6">
                    <h3 className="text-2xl font-bold text-white/90 group-hover:text-blue-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-white/60 line-clamp-2">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.slice(0, 4).map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-md text-blue-300 text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                        {technologies.length > 4 && (
                            <span className="px-3 py-1 text-blue-300/60 text-xs">
                                +{technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
