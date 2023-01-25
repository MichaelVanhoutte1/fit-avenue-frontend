import ExerciseConfiguration from "../components/exercise-configuration";
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
    ConfigDiv,
    SuperSetCheckbox,
    ConfigSelectDiv,
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
                    <Image src="/images/icons/filter.svg" alt="profile" width={25} height={25} />
                </ActionDiv>
            </HeadDiv>
            {/* step 1 */}
            {/* <OverflowDiv>
                <SelectDiv>
                    <ExerciseLibrary />
                    <SelectedExercises />
                </SelectDiv>
            </OverflowDiv> */}
            {/* step 2 */}
            <ConfigSelectDiv>
                <ConfigDiv>
                    <SuperSetCheckbox type="checkbox" />
                    <ExerciseConfiguration src="/images/icons/calendar" alt="dsdf" />
                </ConfigDiv>
                <ConfigDiv>
                    <SuperSetCheckbox type="checkbox" />
                    <ExerciseConfiguration src="/images/icons/calendar" alt="dsdf" />
                </ConfigDiv>
            </ConfigSelectDiv>
        </>
    );
}
