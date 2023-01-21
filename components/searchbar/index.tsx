import { SearchDiv, Search } from "./styles";
import Image from "next/image";

interface Props {}

const Searchbar = (props: Props) => {
    const {} = props;

    return (
        <>
            <SearchDiv>
                <Image src="/images/icons/search.svg" alt="Search" width='20' height='20' />
                <Search type="text" placeholder="Search" />
            </SearchDiv>
        </>
    );
};

export default Searchbar;
