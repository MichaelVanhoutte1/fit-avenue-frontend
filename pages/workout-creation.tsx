import ExerciseLibrary from "../components/exercise-library";
import Searchbar from "../components/searchbar";
import SelectedExercises from "../components/selected-exercises";
import Title from "../components/title";
import {
    ActionDiv,
    HeadDiv,
    ImageDiv,
    SelectDiv,
    TitleDiv,
    SubTitle,
    OverflowDiv,
} from "../styles/pages/workout-creation";
import Image from "next/image";

export default function Statistics() {
    return (
        <>
            <HeadDiv>
                <ImageDiv>
                    <Image
                        src="/images/icons/arrow-left.svg"
                        alt="profile"
                        width={20}
                        height={20}
                    />
                </ImageDiv>
                <TitleDiv>
                    <Title isWhite content="Add exercises" />
                    <SubTitle>Workout creation</SubTitle>
                </TitleDiv>
                <ActionDiv>
                    <Searchbar />
                    <Image
                        src="/images/icons/arrow-left.svg"
                        alt="profile"
                        width={20}
                        height={20}
                    />
                </ActionDiv>
            </HeadDiv>
            <OverflowDiv>
                <SelectDiv>
                    <ExerciseLibrary />
                    <SelectedExercises />
                </SelectDiv>
            </OverflowDiv>
        </>
    );
}
