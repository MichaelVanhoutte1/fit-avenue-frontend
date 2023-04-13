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
} from './styles'
import Image from 'next/image'
import { ExerciseType } from '../exercise-library'
import { ChangeEvent } from 'react'
import { Workout } from '../../pages/workout-creation'

interface Props {
    exerciseData: ExerciseType
    workout: Workout
    setWorkout: (workout: Workout) => void
}

const ExerciseConfiguration = (props: Props) => {
    const { exerciseData, workout, setWorkout } = props
    const { name, gifUrl } = exerciseData

    const removeSet = () => {
        const exercise = workout.exercises.find((item) => item.exerciseId === exerciseData.id)
        exercise!.exerciseSets.pop()
        const newWorkout = { ...workout, exercises: workout.exercises.filter((item) => item.exerciseId !== exerciseData.id) }
        newWorkout.exercises.push(exercise!)
        setWorkout(newWorkout)
    }

    const addSet = () => {
        const exercise = workout.exercises.find((item) => item.exerciseId === exerciseData.id)
        exercise!.exerciseSets.push({ reps: 8, weight: 80 })
        const newWorkout = { ...workout, exercises: workout.exercises.filter((item) => item.exerciseId !== exerciseData.id) }
        newWorkout.exercises.push(exercise!)
        setWorkout(newWorkout)
    }

    const updateSet = (index: number, e: ChangeEvent, reps?: number, weight?: number) => {
        const configuredExercise = workout.exercises.find((item) => item.exerciseId === exerciseData.id)!
        const newSets = [...configuredExercise.exerciseSets]
        newSets[index] = {
            reps: reps ? reps : parseInt((e.target as HTMLInputElement).value),
            weight: weight ? weight : parseInt((e.target as HTMLInputElement).value),
        }
        configuredExercise.exerciseSets = newSets
        const newWorkout = { ...workout, exercises: workout.exercises.filter((item) => item.exerciseId !== exerciseData.id) }
        newWorkout.exercises.push(configuredExercise)
        setWorkout(newWorkout)
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
                    <Image src={'/images/icons/hamburger.svg'} alt={'move'} width="30" height="30" />
                </HeadDiv>
                {workout.exercises
                    .find((item) => item.exerciseId === exerciseData.id)
                    ?.exerciseSets.map((set, index) => (
                        <ConfigurationDiv>
                            <SetText>{'set ' + (index + 1)}</SetText>
                            <ValueDiv>
                                <InputValue
                                    placeholder={set.reps.toString()}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateSet(index, e, undefined, set.weight)}
                                    type="number"
                                />
                                <UnitText>reps</UnitText>
                            </ValueDiv>
                            <Divider>*</Divider>
                            <ValueDiv>
                                <InputValue
                                    placeholder={set.weight.toString()}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateSet(index, e, set.reps, undefined)}
                                    type="number"
                                />
                                <UnitText>kg</UnitText>
                            </ValueDiv>
                        </ConfigurationDiv>
                    ))}
                <ButtonDiv>
                    <RemoveButton onClick={removeSet}>remove</RemoveButton>
                    <AddSetButton onClick={addSet}>add set</AddSetButton>
                </ButtonDiv>
            </ExerciseDiv>
        </>
    )
}

export default ExerciseConfiguration
