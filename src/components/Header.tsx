import Logo from "../../public/img/logo.svg?react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./Button";
import { twMerge } from "tailwind-merge";

const Header = () => {
    return (
        <header
            className={twMerge(
                "absolute w-full top-0 z-50 text-blue-100 py-5 px-5 md:px-10 flex items-center justify-between"
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
        </header>
    );
};

export default Header;
