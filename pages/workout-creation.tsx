import { useEffect, useState } from "react";
import Exercise from "../components/exercise";
import ExerciseConfiguration from "../components/exercise-configuration";
import ExerciseLibrary, { ExerciseType } from "../components/exercise-library";
import Searchbar from "../components/searchbar";
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
} from "../styles/pages/workout-creation.styled";
import Image from "next/image";
import Link from "next/link";
import data from "../data/exercises.json";

export default function Statistics() {
    const [step, setStep] = useState(1);
    const [selectedExercises, setSelectedExercises] = useState<Array<ExerciseType>>([]);
    const [selectedExercisesTargets, setSelectedExercisesTargets] = useState<string[]>([]);
    const [filteredExercises, setFilteredExercises] = useState<Array<ExerciseType>>(data);

    const getSelectedExerciseTargets = () => {
        const targets = new Set<string>();
        selectedExercises.forEach((exercise) => {
            targets.add(exercise.target);
        });
        setSelectedExercisesTargets(Array.from(targets));
    };

    useEffect(() => {
        getSelectedExerciseTargets();
    }, [selectedExercises]);

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
                            <Searchbar
                                unFilteredExercises={data}
                                setFilteredExercises={setFilteredExercises}
                            />
                            <Image
                                src="/images/icons/filter.svg"
                                alt="profile"
                                width={25}
                                height={25}
                            />
                        </>
                    ) : step === 2 ? (
                        <SwitchDiv>
                            <Label htmlFor="restTimer">Enable rest timer</Label>
                            <SwitchInput id="restTimer" type="checkbox" />
                        </SwitchDiv>
                    ) : (
                        <WorkoutNameInputDiv>
                            <Label htmlFor="workoutName">Workout name</Label>
                            <NameInput placeholder="My new workout" id="workoutName" type="text" />
                        </WorkoutNameInputDiv>
                    )}
                </ActionDiv>
            </HeadDiv>
            {step === 1 ? (
                <OverflowDiv>
                    <SelectDiv>
                        <ExerciseLibrary
                            exerciseData={filteredExercises}
                            selectedExercises={selectedExercises}
                            setSelectedExercises={setSelectedExercises}
                        />
                    </SelectDiv>
                </OverflowDiv>
            ) : step === 2 ? (
                <ConfigSelectDiv>
                    {selectedExercises.map((exercise) => (
                        <ConfigDiv>
                            <SuperSetCheckbox type="checkbox" />
                            <ExerciseConfiguration exerciseData={exercise} />
                        </ConfigDiv>
                    ))}
                </ConfigSelectDiv>
            ) : (
                <>
                    <MuscleGroupsDiv>
                        <Title isSmall content="muscles involved" />
                        <MainImage src="/images/rand.jpg" alt="exercise" />
                        <TagDiv>
                            {selectedExercisesTargets.map((target) => (
                                <Tag name={target} />
                            ))}
                        </TagDiv>
                    </MuscleGroupsDiv>
                    <ExercisesDiv>
                        <Title isSmall content="exercises" />
                        {selectedExercises.map((exercise) => (
                            <Exercise isDropdown exerciseData={exercise} />
                        ))}
                    </ExercisesDiv>
                </>
            )}
        </>
    );
}
