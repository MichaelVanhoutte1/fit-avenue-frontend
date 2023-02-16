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
import cs from 'classnames'

interface Props {
    name: string;
    label: string
    src: string;
    alt: string;
    forLibrary?: boolean;
    isDropdown?: boolean;
}

const Exercise = (props: Props) => {
    const { src, alt, name, label, forLibrary, isDropdown } = props;

    return (
        <>
            {forLibrary ? (
                <ExerciseDiv className={cs({libraryExercise: forLibrary})}>
                    <Image src={src} alt={alt} width="30" height="30" />
                    <ValueDiv>
                        <ExerciseName>{name}</ExerciseName>
                        <MuscleGroupsDiv>
                            <BoxLabel>{label}</BoxLabel>
                        </MuscleGroupsDiv>
                    </ValueDiv>
                    <ImageDiv>
                    <Image src='/images/icons/plus.svg' alt='Add exercise' width="20" height="20" />
                    </ImageDiv>
                </ExerciseDiv>
            ) : isDropdown ? 
            (
                <ExerciseDiv>
                    <Image src={src} alt={alt} width="30" height="30" />
                    <ValueDiv>
                        <ExerciseName>{name}</ExerciseName>
                    </ValueDiv>
                    <Image src="/images/icons/arrowhead-down.svg" alt="dropdown" width="30" height="30" />
                </ExerciseDiv>
            )
            : (
                <ExerciseDiv>
                    <Image src={src} alt={alt} width="30" height="30" />
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
