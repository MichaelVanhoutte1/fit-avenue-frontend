import Exercise from "../exercise";
import Title from "../title";
import { ExerciseDiv, TitleDiv } from "./styles";
import RenderIfVisible from "react-render-if-visible";

interface Props {
    exerciseData: ExerciseType[];
    selectedExercises: ExerciseType[];
    setSelectedExercises: (exercises: ExerciseType[]) => void;
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
    const { exerciseData, selectedExercises, setSelectedExercises } = props;

    return (
        <>
            <ExerciseDiv>
                <TitleDiv>
                    <Title isSmall content="library" />
                </TitleDiv>
                {exerciseData.map((item) => (
                    <RenderIfVisible defaultHeight={84}>
                        <Exercise
                            forLibrary
                            isSelected={selectedExercises.includes(item)}
                            exerciseData={item}
                            selectedExercises={selectedExercises}
                            setSelectedExercises={setSelectedExercises}
                        />
                    </RenderIfVisible>
                ))}
            </ExerciseDiv>
        </>
    );
};

export default ExerciseLibrary;
