import { ElementType } from "react";

interface ButtonIconProps {
    icon: ElementType;
}

const ButtonIcon = ({ icon: Icon }: ButtonIconProps) => {
    return <Icon />;
};

export default ButtonIcon;
