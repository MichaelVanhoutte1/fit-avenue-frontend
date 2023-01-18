import Exercise from "../exercise";
import { ExerciseDiv } from "./styles";
import Image from "next/image";

interface Props {

}

const SelectedExercises = (props: Props) => {
    const {  } = props;

    return (
        <>
            <ExerciseDiv>
                <Exercise forLibrary name='Bench Press' src='/images/icons/calendar.svg' alt="exercise" />
                <Exercise forLibrary name='Dumbell Press' src='/images/icons/calendar.svg' alt="exercise" />
                <Exercise forLibrary name='Chest flies' src='/images/icons/calendar.svg' alt="exercise" />
                <Exercise forLibrary name='Tricep Extensions' src='/images/icons/calendar.svg' alt="exercise" />
                <Exercise forLibrary name='Skull Crushers' src='/images/icons/calendar.svg' alt="exercise" />
            </ExerciseDiv>
        </>
    );
};

export default SelectedExercises;
