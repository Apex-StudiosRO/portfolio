type ButtonVariant = 'normal' | 'secondary' | 'underline' | 'corners';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button = ({ children, variant = 'normal', onClick }: ButtonProps) => {
  const baseStyles = "px-6 py-2 font-medium text-lg hover:cursor-pointer transition duration-200 ease-in-out";
  
  const variantStyles = {
    normal: "bg-blue-400 hover:bg-blue-500 rounded-md",
    secondary: "bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-md",
    underline: "bg-transparent text-white/50 hover:text-blue-300 hover:underline underline-offset-4 rounded-none px-0",
    corners: "bg-blue-400 hover:bg-blue-500"
  };
  
  const cornerStyles = variant === 'corners' ? {
    clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
  } : {};
  
  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]}`}
      style={cornerStyles}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
