import {  ValueText, ValueDiv, ExerciseDiv, ExerciseName } from "./styles";
import Image from "next/image";

interface Props {
    name: string;
    src: string;
    alt: string;
}

const Exercise = (props: Props) => {
    const { src, alt, name } = props;

    return (
        <>
            <ExerciseDiv>
                <Image src={src} alt={alt} width='30' height='30' />
                <ValueDiv>
                    <ValueText>1 of 5</ValueText>
                    <ExerciseName>{name}</ExerciseName>
                </ValueDiv>
            </ExerciseDiv>
        </>
    );
};

export default Exercise;
