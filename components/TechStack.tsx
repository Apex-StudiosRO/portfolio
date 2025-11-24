import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss} from "react-icons/si";

export default function TechStack() {
    return (
        <div className="tech-stack-container">
            <div className="tech-divider"></div>
            
            <div className="tech-icons-grid">
                <div className="tech-icon" title="React">
                    <FaReact size={32} />
                </div>

                <div className="tech-icon" title="TypeScript">
                    <SiTypescript size={32} />
                </div>

                <div className="tech-icon tech-icon-accent" title="Next.js">
                    <SiNextdotjs size={32} />
                </div>

                <div className="tech-icon" title="Performance">
                    <SiPostgresql size={32} />
                </div>

                <div className="tech-icon tech-icon-accent" title="Innovation">
                    <SiMongodb size={32} />
                </div>

                <div className="tech-icon tech-icon-accent" title="Innovation">
                    <SiTailwindcss size={32} />
                </div>

                <div className="tech-icon" title="Node.js">
                    <FaNodeJs size={32} />
                </div>
            </div>
            <div className="tech-divider"></div>
        </div>
    );
}
