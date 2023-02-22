import { useState } from "react";
import Exercise from "../components/exercise";
import ExerciseConfiguration from "../components/exercise-configuration";
import ExerciseLibrary from "../components/exercise-library";
import Searchbar from "../components/searchbar";
import SelectedExercises from "../components/selected-exercises";
import Tag from "../components/tag";
import Title from "../components/title";
import {
    ActionDiv,
    HeadDiv,
    ImageDiv,
    SelectDiv,
    TitleDiv,
    SubTitle,
    OverflowDiv,
    ConfigDiv,
    SuperSetCheckbox,
    ConfigSelectDiv,
    MainImage,
    MuscleGroupsDiv,
    TagDiv,
    ExercisesDiv,
    FinishButton,
    NextButton,
    SwitchInput,
    Label,
    SwitchDiv,
    NameInput,
    WorkoutNameInputDiv,
} from "../styles/pages/workout-creation.styled.tsx";
import Image from "next/image";
import Link from "next/link";

export default function Statistics() {
    const [step, setStep] = useState(1);

    return (
        <>
            <HeadDiv>
                <ImageDiv>
                    {step === 1 ? (
                        <Link href="/workouts">
                            <Image
                                src="/images/icons/arrow-left.svg"
                                alt="profile"
                                width={20}
                                height={20}
                            />
                        </Link>
                    ) : (
                        <Image
                            onClick={() => setStep(step - 1)}
                            src="/images/icons/arrow-left.svg"
                            alt="profile"
                            width={20}
                            height={20}
                        />
                    )}

                    {step === 3 ? (
                        <FinishButton>Finish</FinishButton>
                    ) : (
                        <NextButton onClick={() => setStep(step + 1)}>Next</NextButton>
                    )}
                </ImageDiv>
                <TitleDiv>
                    <Title
                        isWhite
                        content={step === 1 ? "Add Exercises" : step === 2 ? "Add Sets" : "Summary"}
                    />
                    {step !== 3 ?? <SubTitle>Workout creation</SubTitle>}
                </TitleDiv>
                <ActionDiv>
                    {step === 1 ? (
                        <>
                            <Searchbar />
                            <Image
                                src="/images/icons/filter.svg"
                                alt="profile"
                                width={25}
                                height={25}
                            />
                        </>
                    ) : step === 2 ? (
                        <SwitchDiv>
                            <Label for="restTimer">Enable rest timer</Label>
                            <SwitchInput id="restTimer" type="checkbox" />
                        </SwitchDiv>
                    ) : (
                        <WorkoutNameInputDiv>
                            <Label for="workoutName">Workout name</Label>
                            <NameInput placeholder="My new workout" id="workoutName" type="text" />
                        </WorkoutNameInputDiv>
                    )}
                </ActionDiv>
            </HeadDiv>
            {step === 1 ? (
                <OverflowDiv>
                    <SelectDiv>
                        <ExerciseLibrary />
                    </SelectDiv>
                </OverflowDiv>
            ) : step === 2 ? (
                <ConfigSelectDiv>
                    <ConfigDiv>
                        <SuperSetCheckbox type="checkbox" />
                        <ExerciseConfiguration src="/images/icons/calendar" alt="dsdf" />
                    </ConfigDiv>
                    <ConfigDiv>
                        <SuperSetCheckbox type="checkbox" />
                        <ExerciseConfiguration src="/images/icons/calendar" alt="dsdf" />
                    </ConfigDiv>
                </ConfigSelectDiv>
            ) : (
                <>
                    <MuscleGroupsDiv>
                        <Title isSmall content="muscles involved" />
                        <MainImage src="/images/rand.jpg" alt="exercise" />
                        <TagDiv>
                            <Tag name="Chest" />
                            <Tag name="Deltoids" />
                            <Tag name="Triceps" />
                        </TagDiv>
                    </MuscleGroupsDiv>
                    <ExercisesDiv>
                        <Title isSmall content="exercises" />
                        <Exercise
                            isDropdown
                            name="Bench Press"
                            src="/images/icons/calendar.svg"
                            alt="stuff"
                        />
                        <Exercise
                            isDropdown
                            name="Bench Press"
                            src="/images/icons/calendar.svg"
                            alt="stuff"
                        />
                        <Exercise
                            isDropdown
                            name="Bench Press"
                            src="/images/icons/calendar.svg"
                            alt="stuff"
                        />
                        <Exercise
                            isDropdown
                            name="Bench Press"
                            src="/images/icons/calendar.svg"
                            alt="stuff"
                        />
                        <Exercise
                            isDropdown
                            name="Bench Press"
                            src="/images/icons/calendar.svg"
                            alt="stuff"
                        />
                    </ExercisesDiv>
                </>
            )}
        </>
    );
}
