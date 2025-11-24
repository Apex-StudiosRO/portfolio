import Image from "next/image";
import LightRays from "@/components/LightRays";
import Button from "@/components/Button";
import TechStack from "@/components/TechStack";
import ParticlesEffect from "@/components/ParticlesEffect";
import ProjectCard from "@/components/ProjectCard";
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { RiErrorWarningLine } from "react-icons/ri";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <NavBar />
            <ScrollToTop />
            <LightRays />
            <section
                id="main"
                className="relative flex w-full min-h-screen items-center justify-between flex-col py-30 px-2 sm:px-4 md:px-8 gap-6 sm:gap-8 md:gap-10"
            >
                <div className="absolute -top-50 -left-50 w-64 h-64 sm:w-96 sm:h-96 bg-blue-300/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-50 -right-50 w-64 h-64 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] bg-blue-300/15 rounded-full blur-3xl"></div>

                <div className="flex flex-col items-center justify-center z-10 text-center gap-6 sm:gap-8 md:gap-10 px-4">
                    <div className="flex flex-col items-center">
                        <span className="text-lg sm:text-xl md:text-2xl font-thin text-white/80 transition-colors cursor-default">
                            Hi, I'm
                        </span>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            Matei
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-monda text-blue-300/80 text-glow break-words max-w-full">
                            Web Developer
                        </span>
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/40 font-monda">
                            Crafting modern web experiences
                        </span>
                    </div>
                </div>
                <ParticlesEffect />

                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4">
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-bold text-xl sm:text-2xl md:text-3xl text-white/90 text-center">
                            Let's Build Something Amazing
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                        <Link href="/#contact">
                            <Button variant="corners">Get In Touch</Button>
                        </Link>
                        <Link href="/#projects">
                            <Button variant="secondary">View Projects</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="techstack">
                <TechStack />
            </section>

            <section
                id="about"
                className="flex relative flex-col w-full min-h-screen gap-8 items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-x-hidden"
            >
                <div className="flex flex-col gap-4 w-full items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300/90">
                        About Me
                    </h2>
                    <div className="tech-divider"></div>
                </div>
                <div className="max-w-7xl w-full h-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
                    <div className="flex-1 flex flex-col gap-6 sm:gap-8 max-w-2xl w-full  items-center">
                        <div className="flex flex-col gap-4 sm:gap-6 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                            <p>
                                I'm a{" "}
                                <span className="text-blue-300 font-semibold">
                                    16-year-old developer
                                </span>{" "}
                                from{" "}
                                <span className="text-white/90">
                                    Suceava, Romania
                                </span>
                                , driven by an insatiable curiosity for
                                technology and a passion for creating
                                exceptional web experiences.
                            </p>

                            <p>
                                My journey into IT began with a simple question:{" "}
                                <span className="text-white/90 italic">
                                    "How do people create such amazing
                                    websites?"
                                </span>{" "}
                                That curiosity transformed into a dedication to
                                mastering modern web development, constantly
                                pushing myself to learn new technologies and
                                best practices.
                            </p>

                            <p>
                                I specialize in building{" "}
                                <span className="text-blue-300 font-semibold">
                                    responsive
                                </span>
                                ,{" "}
                                <span className="text-blue-300 font-semibold">
                                    performant
                                </span>
                                , and{" "}
                                <span className="text-blue-300 font-semibold">
                                    visually stunning
                                </span>{" "}
                                web applications using cutting-edge technologies
                                like React, Next.js, and TypeScript. My
                                self-taught journey has taught me the value of
                                persistence, problem-solving, and continuous
                                learning.
                            </p>

                            <p>
                                What sets me apart is my{" "}
                                <span className="text-white/90 font-semibold">
                                    youth combined with dedication
                                </span>
                                —I bring fresh perspectives, adaptability, and
                                an eagerness to tackle complex challenges. I'm
                                always exploring new frameworks, design
                                patterns, and industry trends to stay ahead in
                                this fast-evolving field.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-4">
                            <span className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-lg text-blue-300 text-sm">
                                Self-Taught
                            </span>
                            <span className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-lg text-blue-300 text-sm">
                                Problem Solver
                            </span>
                            <span className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-lg text-blue-300 text-sm">
                                Fast Learner
                            </span>
                            <span className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-lg text-blue-300 text-sm">
                                Detail-Oriented
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center w-full max-w-sm sm:max-w-md">
                        <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px]">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-2xl"></div>

                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-blue-950/40 backdrop-blur-sm">
                                <Image
                                    src="/about.png"
                                    alt="Matei - Web Developer"
                                    fill
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            </div>

                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-lg blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="projects"
                className="flex relative w-full min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-x-hidden"
            >
                <div className="max-w-7xl w-full flex flex-col gap-8 sm:gap-10 md:gap-12 items-center">
                    <div className="flex flex-col gap-4 w-full items-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300/90">
                            Featured Projects
                        </h2>
                        <div className="tech-divider"></div>
                        <p className="text-base sm:text-lg md:text-xl text-white/60">
                            A showcase of my recent work and personal projects
                        </p>
                    </div>

                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    image={project.image}
                                    url={project.url}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 gap-4 sm:gap-6">
                            <div className="text-6xl sm:text-7xl md:text-8xl text-white/60">
                                <RiErrorWarningLine />
                            </div>
                            <p className="text-xl sm:text-2xl text-white/60 text-center">
                                No projects available
                            </p>
                            <p className="text-base sm:text-lg text-white/40 text-center">
                                Check back soon for exciting new projects!
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
