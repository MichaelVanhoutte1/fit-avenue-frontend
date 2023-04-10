import Exercise from "../exercise";
import Title from "../title";
import { ExerciseDiv, TitleDiv } from "./styles";
import RenderIfVisible from "react-render-if-visible";

interface Props {
    exerciseData: ExerciseType[];
    selectedExercises: ExerciseType[];
    toggleExerciseToWorkout: (exercise: ExerciseType) => void;
}

export interface ExerciseType {
    name: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    target: string;
    id: string;
}

const ExerciseLibrary = (props: Props) => {
    const { exerciseData, selectedExercises, toggleExerciseToWorkout } = props;

    return (
        <>
            <ExerciseDiv>
                <TitleDiv>
                    <Title isSmall content="library" />
                </TitleDiv>
                {exerciseData.map((item) => (
                    <RenderIfVisible key={item.id} defaultHeight={84}>
                        <Exercise
                            forLibrary
                            isSelected={selectedExercises.includes(item)}
                            exerciseData={item}
                            toggleExerciseToWorkout={toggleExerciseToWorkout}
                        />
                    </RenderIfVisible>
                ))}
            </ExerciseDiv>
        </>
    );
};

export default ExerciseLibrary;
