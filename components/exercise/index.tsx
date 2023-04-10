import {
    ValueText,
    ValueDiv,
    ExerciseDiv,
    ExerciseName,
    BoxLabel,
    MuscleGroupsDiv,
    ImageDiv,
} from "./styles";
import Image from "next/image";
import cs from "classnames";
import { ExerciseType } from "../exercise-library";

interface Props {
    exerciseData: ExerciseType;
    isSelected?: boolean;
    toggleExerciseToWorkout: (exercise: ExerciseType) => void;
    forLibrary?: boolean;
    isDropdown?: boolean;
}

const Exercise = (props: Props) => {
    const {
        exerciseData,
        forLibrary,
        isDropdown,
        isSelected,
        toggleExerciseToWorkout,
    } = props;
    const { name, gifUrl, target } = exerciseData;

    return (
        <>
            {forLibrary ? (
                <ExerciseDiv
                    className={cs({ libraryExercise: forLibrary, isSelected: isSelected })}
                >
                    <Image src={gifUrl} alt={name + "exercise image"} width="30" height="30" />
                    <ValueDiv>
                        <ExerciseName>{name.charAt(0).toUpperCase() + name.slice(1)}</ExerciseName>
                        <MuscleGroupsDiv>
                            <BoxLabel>{target.charAt(0).toUpperCase() + target.slice(1)}</BoxLabel>
                        </MuscleGroupsDiv>
                    </ValueDiv>
                    <ImageDiv>
                        <Image
                            src="/images/icons/plus.svg"
                            alt="Add exercise"
                            width="20"
                            height="20"
                            onClick={() => toggleExerciseToWorkout(exerciseData)}
                        />
                    </ImageDiv>
                </ExerciseDiv>
            ) : isDropdown ? (
                <ExerciseDiv>
                    <Image src={gifUrl} alt={name + "exercise image"} width="30" height="30" />
                    <ValueDiv>
                        <ExerciseName>{name}</ExerciseName>
                    </ValueDiv>
                    <Image
                        src="/images/icons/arrowhead-down.svg"
                        alt="dropdown"
                        width="30"
                        height="30"
                    />
                </ExerciseDiv>
            ) : (
                <ExerciseDiv>
                    <Image src={gifUrl} alt={name + "exercise image"} width="30" height="30" />
                    <ValueDiv>
                        <ValueText>1 of 5</ValueText>
                        <ExerciseName>{name}</ExerciseName>
                    </ValueDiv>
                </ExerciseDiv>
            )}
        </>
    );
};

export default Exercise;
