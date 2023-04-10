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
import { ChangeEvent, SyntheticEvent, useState } from "react";

export interface ConfiguredExercise {
    exerciseSets: ExerciseSet[];
    exerciseId: string;
}
export interface ExerciseSet {
    reps: number
    weight: number;
}
interface Props {
    exerciseData: ExerciseType;
}

const ExerciseConfiguration = (props: Props) => {
    const { exerciseData } = props;
    const { name, gifUrl } = exerciseData;
    const [configuredExercise, setConfiguredExercise] = useState<ConfiguredExercise>({exerciseSets: [{reps: 8, weight: 80}, {reps: 8, weight: 80}, {reps: 8, weight: 80}], exerciseId: '123'});

    const removeSet = () => {
        setConfiguredExercise({...configuredExercise, exerciseSets: configuredExercise.exerciseSets.slice(0, -1)});
    }

    const addSet = () => {
        setConfiguredExercise({...configuredExercise, exerciseSets: [...configuredExercise.exerciseSets, {reps: 8, weight: 80}]});
    }

    const updateSet = (index: number, e: ChangeEvent,  reps?: number, weight?: number ) => {
        const newSets = [...configuredExercise.exerciseSets];
        newSets[index] = {reps: reps ? reps : parseInt((e.target as HTMLInputElement).value), weight: weight ? weight : parseInt((e.target as HTMLInputElement).value)};
        setConfiguredExercise({...configuredExercise, exerciseSets: newSets});
        console.log(configuredExercise)
    }

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
                {configuredExercise.exerciseSets.map((set, index) => (
                <ConfigurationDiv>
                    <SetText>{'set ' + (index + 1)}</SetText>
                    <ValueDiv>
                        <InputValue placeholder={set.reps.toString()} onChange={(e: ChangeEvent<HTMLInputElement>) => updateSet(index, e, undefined, set.weight)} type="number" />
                        <UnitText>reps</UnitText>
                    </ValueDiv>
                    <Divider>*</Divider>
                    <ValueDiv>
                        <InputValue placeholder={set.weight.toString()} onChange={(e: ChangeEvent<HTMLInputElement>) => updateSet(index, e, set.reps, undefined)} type="number" />
                        <UnitText>kg</UnitText>
                    </ValueDiv>
                </ConfigurationDiv>))}
                <ButtonDiv>
                    <RemoveButton onClick={removeSet}>remove</RemoveButton>
                    <AddSetButton onClick={addSet}>add set</AddSetButton>
                </ButtonDiv>
            </ExerciseDiv>
        </>
    );
};

export default ExerciseConfiguration;
