import Logo from "../../public/img/logo.svg?react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./Button";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={twMerge(
                "w-full z-50 text-blue-100 p-3 px-5 box-border fixed top-0 left-0 transition-all duration-300",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div
                className={twMerge(
                    "flex items-center rounded-lg justify-between flex-wrap py-7 px-5 md:px-10 transition-all duration-300",
                    lastScrollY > 10 ? "bg-black" : ""
                )}
            >
                <div className="flex gap-5">
                    <div className="text-sm md:size-12 size-8">
                        <Logo />
                    </div>
                    <div className="flex gap-3">
                        <Button.Root>
                            <Button.Text>Products</Button.Text>
                            <Button.Icon icon={RiArrowDownSLine} />
                        </Button.Root>
                        <Button.Root>
                            <Button.Text>WhitePaper</Button.Text>
                        </Button.Root>
                    </div>
                </div>
                <div></div>
            </div>
        </header>
    );
};

export default Header;
