import {
    ValueText,
    ValueDiv,
    ExerciseDiv,
    ExerciseName,
    BoxLabel,
    MuscleGroupsDiv,
    ImageDiv,
    DropdownValueDiv,
    Divider,
    UnitText,
    ConfigurationDiv,
    HeadDiv,
    SetText,
    OutputValue,
    DropdownDiv,
} from './styles'
import Image from 'next/image'
import cs from 'classnames'
import { ExerciseType } from '../exercise-library'
import { Workout } from '../../pages/workout-creation'
import { useState } from 'react'

interface Props {
    exerciseData: ExerciseType
    isSelected?: boolean
    toggleExerciseToWorkout: (exercise: ExerciseType) => void
    forLibrary?: boolean
    isDropdown?: boolean
    workout?: Workout
}

const Exercise = (props: Props) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const { exerciseData, forLibrary, isDropdown, isSelected, toggleExerciseToWorkout, workout } = props
    const { name, gifUrl, target, id } = exerciseData
    const exerciseFromWorkout = workout?.exercises.find((exercise) => exercise.exerciseId === id)

    return (
        <>
            {forLibrary ? (
                <ExerciseDiv className={cs({ libraryExercise: forLibrary, isSelected: isSelected })}>
                    <Image src={gifUrl} alt={name + 'exercise image'} width="30" height="30" />
                    <ValueDiv>
                        <ExerciseName>{name.charAt(0).toUpperCase() + name.slice(1)}</ExerciseName>
                        <MuscleGroupsDiv>
                            <BoxLabel>{target.charAt(0).toUpperCase() + target.slice(1)}</BoxLabel>
                        </MuscleGroupsDiv>
                    </ValueDiv>
                    <ImageDiv>
                        <Image src="/images/icons/plus.svg" alt="Add exercise" width="20" height="20" onClick={() => toggleExerciseToWorkout(exerciseData)} />
                    </ImageDiv>
                </ExerciseDiv>
            ) : isDropdown ? (
                <ExerciseDiv className={cs({ isDropdown: isDropdown })}>
                    <HeadDiv>
                        <Image src={gifUrl} alt={name + 'exercise image'} width="30" height="30" />
                        <ValueDiv>
                            <ExerciseName>{name}</ExerciseName>
                        </ValueDiv>
                        <ImageDiv className={cs({ isDropdownActive: isDropdownActive })}>
                            <Image
                                onClick={() => setIsDropdownActive(!isDropdownActive)}
                                src="/images/icons/arrowhead-down.svg"
                                alt="dropdown"
                                width="30"
                                height="30"
                            />
                        </ImageDiv>
                    </HeadDiv>
                    <DropdownDiv className={cs({ isDropdownActive: isDropdownActive })}>
                        {exerciseFromWorkout?.exerciseSets.map((set, index) => (
                            <ConfigurationDiv>
                                <SetText>{'set ' + (index + 1)}</SetText>
                                <DropdownValueDiv>
                                    <OutputValue>{set.reps}</OutputValue>
                                    <UnitText>reps</UnitText>
                                </DropdownValueDiv>
                                <Divider>*</Divider>
                                <DropdownValueDiv>
                                    <OutputValue>{set.weight}</OutputValue>
                                    <UnitText>kg</UnitText>
                                </DropdownValueDiv>
                            </ConfigurationDiv>
                        ))}
                    </DropdownDiv>
                </ExerciseDiv>
            ) : (
                <ExerciseDiv>
                    <Image src={gifUrl} alt={name + 'exercise image'} width="30" height="30" />
                    <ValueDiv>
                        <ValueText>1 of 5</ValueText>
                        <ExerciseName>{name}</ExerciseName>
                    </ValueDiv>
                </ExerciseDiv>
            )}
        </>
    )
}

export default Exercise
