export default function ParticlesEffect() {
    return (
        <div className="particles-container">
            {[...Array(30)].map((_, i) => (
                <div 
                    key={i} 
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${8 + Math.random() * 12}s`
                    }}
                ></div>
            ))}
        </div>
    );
}
