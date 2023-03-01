import { ChangeEvent } from "react";
import { ExerciseType } from "../exercise-library";
import { SearchDiv, Search } from "./styles";
import Image from "next/image";

interface Props {
    setSearchValue: (value: string) => void;
}

const Searchbar = (props: Props) => {
    const { setSearchValue } = props;
    
    return (
        <>
            <SearchDiv>
                <Image src="/images/icons/search.svg" alt="Search" width="20" height="20" />
                <Search
                    type="text"
                    placeholder="Search"
                    onChange={(e: ChangeEvent) => setSearchValue((e.target! as HTMLInputElement).value )}
                />
            </SearchDiv>
        </>
    );
};

export default Searchbar;
