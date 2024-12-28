import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonRootProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

const ButtonRoot = ({ children, id, className }: ButtonRootProps) => {
    return (
        <button
            id={id || ""}
            className={twMerge(
                "flex-center gap-1 group relative z-1 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-4 py-1.5 md:py-3 md:px-7 text-black",
                className
            )}
        >
            {children}
        </button>
    );
};

export default ButtonRoot;
