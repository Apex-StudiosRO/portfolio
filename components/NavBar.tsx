import Image from "next/image";
import ButtonUnderline from "./ButtonUnderline";

const NavBar = () => {
    return (
        <nav className="fixed p-2 top-1 w-screen flex items-center justify-center z-50">
            <div className="flex py-2 px-6 bg-blue-300/15 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm border-2 border-blue-300/80 gap-6 items-center">
                <Image src="/logo2.png" alt="Logo" width={30} height={30} className="rounded-full" />
                <div className="flex gap-4 items-center justify-center">
                    <ButtonUnderline>Home</ButtonUnderline>
                    <ButtonUnderline>About</ButtonUnderline>
                    <ButtonUnderline>Projects</ButtonUnderline>
                    <ButtonUnderline>Contact</ButtonUnderline>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
