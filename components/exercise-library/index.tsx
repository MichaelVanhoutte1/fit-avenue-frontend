import Exercise from "../exercise";
import {  ValueText, ValueDiv, ExerciseDiv, ExerciseName } from "./styles";
import Image from "next/image";

interface Props {

}

const ExerciseLibrary = (props: Props) => {
    const {  } = props;

    return (
        <>
                <Exercise forLibrary name='Bench Press' src='/images/icons/calendar.svg' alt="exercise" />
        </>
    );
};

export default ExerciseLibrary;
