import { ItemContent, ItemDiv, ItemImage } from "./styles";

interface Props {
    src: string;
    alt: string;
    content: string;
    href: string;
}

const NavbarItem = (props: Props) => {
const {content, src, alt, href} = props;

    return (
        <>
            <ItemDiv href={href}>
                <ItemImage src={src} alt={alt}/>
                <ItemContent>{content}</ItemContent>
            </ItemDiv>
        </>
    );
};

export default NavbarItem;
