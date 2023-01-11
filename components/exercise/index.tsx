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

interface Props {
    name: string;
    src: string;
    alt: string;
    forLibrary?: boolean;
}

const Exercise = (props: Props) => {
    const { src, alt, name, forLibrary } = props;

    return (
        <>
            {forLibrary ? (
                <ExerciseDiv>
                    <Image src={src} alt={alt} width="30" height="30" />
                    <ValueDiv>
                        <ExerciseName>{name}</ExerciseName>
                        <MuscleGroupsDiv>
                            <BoxLabel>Chest</BoxLabel>
                            <BoxLabel>Triceps</BoxLabel>
                            <BoxLabel>Deltoids</BoxLabel>
                        </MuscleGroupsDiv>
                    </ValueDiv>
                    <ImageDiv>
                    <Image src='/images/icons/plus.svg' alt='Add exercise' width="20" height="20" />
                    </ImageDiv>
                </ExerciseDiv>
            ) : (
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
