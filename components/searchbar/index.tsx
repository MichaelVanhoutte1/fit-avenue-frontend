import { ChangeEvent } from "react";
import { ExerciseType } from "../exercise-library";
import { SearchDiv, Search } from "./styles";
import Image from "next/image";

interface Props {
    unFilteredExercises: ExerciseType[];
    setFilteredExercises: (exercises: ExerciseType[]) => void;
}

const Searchbar = (props: Props) => {
    const { unFilteredExercises, setFilteredExercises } = props;

    const searchExercises = (value: string) => {
        setFilteredExercises(unFilteredExercises.filter((item) => item.name.includes(value)));
    };

    return (
        <>
            <SearchDiv>
                <Image src="/images/icons/search.svg" alt="Search" width="20" height="20" />
                <Search
                    type="text"
                    placeholder="Search"
                    onChange={(e: ChangeEvent) => searchExercises((e.target! as HTMLInputElement).value )}
                />
            </SearchDiv>
        </>
    );
};

export default Searchbar;
