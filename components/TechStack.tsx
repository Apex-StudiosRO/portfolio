import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss} from "react-icons/si";

export default function TechStack() {
    const iconClasses = "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 p-1.5 sm:p-2 text-blue-300/60 bg-blue-300/5 border border-blue-300/20 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 will-change-transform hover:text-blue-300 hover:bg-blue-300/15 hover:border-blue-300/50 hover:shadow-[0_0_20px_rgba(147,197,253,0.4)] hover:-translate-y-1 hover:scale-110 flex-shrink-0";
    const accentClasses = "tech-icon-accent w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 p-1.5 sm:p-2 text-blue-300/80 bg-blue-300/10 border border-blue-300/40 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 will-change-transform hover:text-blue-300 hover:bg-blue-300/15 hover:border-blue-300/50 hover:shadow-[0_0_20px_rgba(147,197,253,0.4)] hover:-translate-y-1 hover:scale-110 flex-shrink-0";
    
    return (
        <div className="relative flex flex-col items-center gap-6 sm:gap-8 py-6 sm:py-8 my-8 sm:my-12">
            <div className="tech-divider"></div>
            
            <div className="flex gap-2 xs:gap-3 sm:gap-4 md:gap-8 items-center justify-center flex-nowrap relative z-[1] overflow-x-auto overflow-y-hidden w-full px-2 sm:px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className={iconClasses} title="React">
                    <FaReact className="w-full h-full" />
                </div>

                <div className={iconClasses} title="TypeScript">
                    <SiTypescript className="w-full h-full" />
                </div>

                <div className={accentClasses} title="Next.js">
                    <SiNextdotjs className="w-full h-full" />
                </div>

                <div className={iconClasses} title="PostgreSQL">
                    <SiPostgresql className="w-full h-full" />
                </div>

                <div className={accentClasses} title="MongoDB">
                    <SiMongodb className="w-full h-full" />
                </div>

                <div className={accentClasses} title="Tailwind CSS">
                    <SiTailwindcss className="w-full h-full" />
                </div>

                <div className={iconClasses} title="Node.js">
                    <FaNodeJs className="w-full h-full" />
                </div>
            </div>
            <div className="tech-divider"></div>
        </div>
    );
}
