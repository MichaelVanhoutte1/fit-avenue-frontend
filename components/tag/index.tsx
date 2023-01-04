import { ExerciseDiv, ExerciseName } from "./styles";

interface Props {
    name: string;
}

const Exercise = (props: Props) => {
    const { name } = props;

    return (
        <>
            <ExerciseDiv>
                    <ExerciseName>{name}</ExerciseName>
            </ExerciseDiv>
        </>
    );
};

export default Exercise;
