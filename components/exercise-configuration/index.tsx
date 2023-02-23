import {
    ValueDiv,
    ExerciseDiv,
    ConfigurationDiv,
    SetText,
    InputValue,
    UnitText,
    AddSetButton,
    ButtonDiv,
    RemoveButton,
    HeadDiv,
    Divider,
    ExerciseTitleDiv,
    ExerciseTitle,
} from "./styles";
import Image from "next/image";
import { ExerciseType } from "../exercise-library";

interface Props {
    exerciseData: ExerciseType;
}

const ExerciseConfiguration = (props: Props) => {
    const { exerciseData } = props;
    const { name, gifUrl } = exerciseData;

    return (
        <>
            <ExerciseDiv>
                <HeadDiv>
                    <ExerciseTitleDiv>
                        <Image src={gifUrl} alt={name + 'exercise image'} width="30" height="30" />
                        <ExerciseTitle>{name}</ExerciseTitle>
                    </ExerciseTitleDiv>
                    <Image
                        src={"/images/icons/hamburger.svg"}
                        alt={"move"}
                        width="30"
                        height="30"
                    />
                </HeadDiv>
                <ConfigurationDiv>
                    <SetText>set 1</SetText>
                    <ValueDiv>
                        <InputValue placeholder="8" type="number" />
                        <UnitText>reps</UnitText>
                    </ValueDiv>
                    <Divider>*</Divider>
                    <ValueDiv>
                        <InputValue placeholder="80" type="number" />
                        <UnitText>kg</UnitText>
                    </ValueDiv>
                </ConfigurationDiv>
                <ConfigurationDiv>
                    <SetText>set 1</SetText>
                    <ValueDiv>
                        <InputValue placeholder="8" type="number" />
                        <UnitText>reps</UnitText>
                    </ValueDiv>
                    <Divider>*</Divider>
                    <ValueDiv>
                        <InputValue placeholder="80" type="number" />
                        <UnitText>kg</UnitText>
                    </ValueDiv>
                </ConfigurationDiv>
                <ButtonDiv>
                    <RemoveButton>remove</RemoveButton>
                    <AddSetButton>add set</AddSetButton>
                </ButtonDiv>
            </ExerciseDiv>
        </>
    );
};

export default ExerciseConfiguration;
