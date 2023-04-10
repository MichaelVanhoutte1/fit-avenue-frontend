import { useEffect, useState } from 'react'
import Exercise from '../components/exercise'
import ExerciseConfiguration from '../components/exercise-configuration'
import ExerciseLibrary, { ExerciseType } from '../components/exercise-library'
import Searchbar from '../components/searchbar'
import Tag from '../components/tag'
import Title from '../components/title'
import Image from 'next/image'
import Link from 'next/link'
import exerciseData from '../data/exercises.json'
import targetMuscleData from '../data/target-muscles.json'
import equipmentData from '../data/equipment.json'
import ReactModal from 'react-modal'
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
} from '../styles/pages/workout-creation.styled'
import ExerciseFilter from '../components/exercise-filter'

export interface ConfiguredExercise {
    exerciseSets: ExerciseSet[]
    exerciseId: string
}
export interface ExerciseSet {
    reps: number
    weight: number
}

export interface Workout {
    name: string
    exercises: ConfiguredExercise[]
}

export default function Statistics() {
    const [step, setStep] = useState(1)
    const [selectedExercises, setSelectedExercises] = useState<Array<ExerciseType>>([])
    const [selectedExercisesTargets, setSelectedExercisesTargets] = useState<string[]>([])
    const [selectedTargetMuscles, setSelectedTargetMuscles] = useState<string[]>([])
    const [selectedEquipment, setSelectedEquipment] = useState<string[]>([])
    const [filteredExercises, setFilteredExercises] = useState<Array<ExerciseType>>(exerciseData)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
    const [workout, setWorkout] = useState<Workout>({ name: '', exercises: [] })

    const getSelectedExerciseTargets = () => {
        const targets = new Set<string>()
        selectedExercises.forEach((exercise) => {
            targets.add(exercise.target)
        })
        setSelectedExercisesTargets(Array.from(targets))
    }

    useEffect(() => {
        getSelectedExerciseTargets()
    }, [selectedExercises])

    const toggleExerciseToWorkout = (exercise: ExerciseType) => {
        if (selectedExercises.includes(exercise) && workout.exercises.find((item) => item.exerciseId === exercise.id)) {
            const newSelectedExercises = selectedExercises.filter((item) => item.id !== exercise.id)
            setSelectedExercises(newSelectedExercises)
            const newWorkout = { ...workout, exercises: workout.exercises.filter((item) => item.exerciseId !== exercise.id) }
            setWorkout(newWorkout)
        } else {
            const newSelectedExercises = [...selectedExercises, exercise]
            setSelectedExercises(newSelectedExercises)
            const newWorkout = {
                ...workout,
                exercises: [
                    ...workout.exercises,
                    {
                        exerciseId: exercise.id,
                        exerciseSets: [
                            { reps: 8, weight: 80 },
                            { reps: 8, weight: 80 },
                            { reps: 8, weight: 80 },
                        ],
                    },
                ],
            }
            setWorkout(newWorkout)
        }
    }

    const filterExercises = () => {
        const searchedExercises = exerciseData.filter((item) => item.name.includes(searchValue))
        const newFilteredExercises = searchedExercises.filter((exercise) => {
            if (selectedEquipment.length === 0 && selectedTargetMuscles.length === 0) {
                return true
            } else if (selectedEquipment.length === 0) {
                if (selectedTargetMuscles.includes(exercise.target)) {
                    return true
                } else {
                    return false
                }
            } else if (selectedTargetMuscles.length === 0) {
                if (selectedEquipment.includes(exercise.equipment)) {
                    return true
                } else {
                    return false
                }
            } else {
                if (selectedEquipment.includes(exercise.equipment) && selectedTargetMuscles.includes(exercise.target)) {
                    return true
                } else {
                    return false
                }
            }
        })
        setFilteredExercises(newFilteredExercises)
    }

    useEffect(() => {
        filterExercises()
    }, [searchValue])

    return (
        <>
            <HeadDiv>
                <ImageDiv>
                    {step === 1 ? (
                        <Link href="/workouts">
                            <Image src="/images/icons/arrow-left.svg" alt="profile" width={20} height={20} />
                        </Link>
                    ) : (
                        <Image onClick={() => setStep(step - 1)} src="/images/icons/arrow-left.svg" alt="profile" width={20} height={20} />
                    )}

                    {step === 3 ? <FinishButton>Finish</FinishButton> : <NextButton onClick={() => setStep(step + 1)}>Next</NextButton>}
                </ImageDiv>
                <TitleDiv>
                    <Title isWhite content={step === 1 ? 'Add Exercises' : step === 2 ? 'Add Sets' : 'Summary'} />
                    {step !== 3 ?? <SubTitle>Workout creation</SubTitle>}
                </TitleDiv>
                <ActionDiv>
                    {step === 1 ? (
                        <>
                            <Searchbar setSearchValue={setSearchValue} />
                            <Image src="/images/icons/filter.svg" alt="profile" width={25} height={25} onClick={() => setIsModalOpen(true)} />
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
                <>
                    <ReactModal style={{ content: { inset: 0, height: '100vh', border: 'none', background: '#3c4789', borderRadius: 0 } }} isOpen={isModalOpen}>
                        <ExerciseFilter
                            filterExercises={filterExercises}
                            selectedEquipment={selectedEquipment}
                            selectedTargetMuscles={selectedTargetMuscles}
                            setSelectedEquipment={setSelectedEquipment}
                            setSelectedTargetMuscles={setSelectedTargetMuscles}
                            setIsModalOpen={setIsModalOpen}
                            targetMuscleData={targetMuscleData}
                            equipmentData={equipmentData}
                        />
                    </ReactModal>
                    <OverflowDiv>
                        <SelectDiv>
                            <ExerciseLibrary
                                exerciseData={filteredExercises}
                                selectedExercises={selectedExercises}
                                toggleExerciseToWorkout={toggleExerciseToWorkout}
                            />
                        </SelectDiv>
                    </OverflowDiv>
                </>
            ) : step === 2 ? (
                <ConfigSelectDiv>
                    {selectedExercises.map((exercise) => (
                        <ConfigDiv>
                            <SuperSetCheckbox type="checkbox" />
                            <ExerciseConfiguration workout={workout} setWorkout={setWorkout} exerciseData={exercise} />
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
                            <Exercise isDropdown toggleExerciseToWorkout={toggleExerciseToWorkout} exerciseData={exercise} />
                        ))}
                    </ExercisesDiv>
                </>
            )}
        </>
    )
}
