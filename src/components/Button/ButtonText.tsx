import { ReactNode } from "react";

interface ButtonTextProps {
    children: ReactNode;
}

const ButtonText = ({ children }: ButtonTextProps) => {
    return (
        <span className="relative inline-flex overflow-hidden font-general md:text-md text-xs uppercase">
            {children}
        </span>
    );
};

export default ButtonText;
