import { ItemContent, ItemDiv, ItemImage } from "./styles";

interface Props {
    src: string;
    alt: string;
    content: string;
}

const NavbarItem = (props: Props) => {
const {content, src, alt} = props;

    return (
        <>
            <ItemDiv>
                <ItemImage src={src} alt={alt}/>
                <ItemContent>{content}</ItemContent>
            </ItemDiv>
        </>
    );
};

export default NavbarItem;
