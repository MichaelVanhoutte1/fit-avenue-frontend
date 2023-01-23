import Exercise from "../exercise";
import Title from "../title";
import { ExerciseDiv, TitleDiv } from "./styles";

interface Props {}

const SelectedExercises = (props: Props) => {
    const {} = props;

    return (
        <>
            <ExerciseDiv>
                <TitleDiv>
                    <Title isSmall content="selected" />
                </TitleDiv>
                <Exercise
                    forLibrary
                    name="Bench Press"
                    src="/images/icons/calendar.svg"
                    alt="exercise"
                />
                <Exercise
                    forLibrary
                    name="Dumbell Press"
                    src="/images/icons/calendar.svg"
                    alt="exercise"
                />
                <Exercise
                    forLibrary
                    name="Chest flies"
                    src="/images/icons/calendar.svg"
                    alt="exercise"
                />
                <Exercise
                    forLibrary
                    name="Tricep Extensions"
                    src="/images/icons/calendar.svg"
                    alt="exercise"
                />
                <Exercise
                    forLibrary
                    name="Skull Crushers"
                    src="/images/icons/calendar.svg"
                    alt="exercise"
                />
            </ExerciseDiv>
        </>
    );
};

export default SelectedExercises;
