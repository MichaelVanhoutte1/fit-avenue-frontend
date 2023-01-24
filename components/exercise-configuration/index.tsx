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
import cs from "classnames";
import Title from "../title";

interface Props {
    src: string;
    alt: string;
}

const ExerciseConfiguration = (props: Props) => {
    const { src, alt } = props;

    return (
        <>
            <ExerciseDiv>
                <HeadDiv>
                    <ExerciseTitleDiv>
                        <Image src={src} alt={alt} width="30" height="30" />
                        <ExerciseTitle>Deadlift </ExerciseTitle>
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
                        <InputValue value="8" type="number" />
                        <UnitText>reps</UnitText>
                    </ValueDiv>
                    <Divider>*</Divider>
                    <ValueDiv>
                        <InputValue value="80" type="number" />
                        <UnitText>kg</UnitText>
                    </ValueDiv>
                </ConfigurationDiv>
                <ConfigurationDiv>
                    <SetText>set 1</SetText>
                    <ValueDiv>
                        <InputValue value="8" type="number" />
                        <UnitText>reps</UnitText>
                    </ValueDiv>
                    <Divider>*</Divider>
                    <ValueDiv>
                        <InputValue value="80" type="number" />
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
