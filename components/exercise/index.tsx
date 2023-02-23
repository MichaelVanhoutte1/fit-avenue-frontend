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
    selectedExercises?: ExerciseType[];
    setSelectedExercises?: (exercises: ExerciseType[]) => void;
    forLibrary?: boolean;
    isDropdown?: boolean;
}

const Exercise = (props: Props) => {
    const {
        exerciseData,
        forLibrary,
        isDropdown,
        isSelected,
        selectedExercises,
        setSelectedExercises,
    } = props;
    const { name, gifUrl, target } = exerciseData;

    const toggleExerciseSelect = () => {
        if (selectedExercises && setSelectedExercises) {
            if (!selectedExercises.includes(exerciseData)) {
                setSelectedExercises([...selectedExercises, exerciseData]);
            } else {
                setSelectedExercises(selectedExercises.filter((item) => item !== exerciseData));
            }
        }
    };
    return (
        <>
            {forLibrary ? (
                <ExerciseDiv
                    className={cs({ libraryExercise: forLibrary, isSelected: isSelected })}
                >
                    <Image src={gifUrl} alt={name + "exercise image"} width="30" height="30" />
                    <ValueDiv>
                        <ExerciseName>{name}</ExerciseName>
                        <MuscleGroupsDiv>
                            <BoxLabel>{target}</BoxLabel>
                        </MuscleGroupsDiv>
                    </ValueDiv>
                    <ImageDiv>
                        <Image
                            src="/images/icons/plus.svg"
                            alt="Add exercise"
                            width="20"
                            height="20"
                            onClick={() => toggleExerciseSelect()}
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
