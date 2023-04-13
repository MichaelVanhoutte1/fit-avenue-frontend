import BoxLabel from '../box-label'
import Title from '../title'
import { ExerciseFilterDiv, TitleDiv, CloseButton, FilterDiv, FinishButton } from './styles'
import Image from 'next/image'

interface Props {
    targetMuscleData: string[]
    equipmentData: string[]
    selectedEquipment: string[]
    selectedTargetMuscles: string[]
    setSelectedEquipment: (value: string[]) => void
    setSelectedTargetMuscles: (value: string[]) => void
    setIsModalOpen: (value: boolean) => void
    filterExercises: () => void
}

const ExerciseFilter = (props: Props) => {
    const {
        targetMuscleData,
        equipmentData,
        selectedEquipment,
        selectedTargetMuscles,
        setIsModalOpen,
        setSelectedEquipment,
        setSelectedTargetMuscles,
        filterExercises,
    } = props

    const checkIfIsSelected = (item: string) => {
        if (selectedEquipment.includes(item) || selectedTargetMuscles.includes(item)) {
            return true
        } else {
            return false
        }
    }

    const toggleEquipment = (value: string) => {
        if (selectedEquipment.includes(value)) {
            const newEquipment = selectedEquipment.filter((equipment) => equipment !== value)
            setSelectedEquipment(newEquipment)
        } else {
            const newEquipment = [...selectedEquipment, value]
            setSelectedEquipment(newEquipment)
        }
    }

    const toggleTargetMuscle = (value: string) => {
        if (selectedTargetMuscles.includes(value)) {
            const newTargetMuscle = selectedTargetMuscles.filter((targetMuscle) => targetMuscle !== value)
            setSelectedTargetMuscles(newTargetMuscle)
        } else {
            const newTargetMuscle = [...selectedTargetMuscles, value]
            setSelectedTargetMuscles(newTargetMuscle)
        }
    }

    return (
        <>
            <ExerciseFilterDiv>
                <CloseButton>
                    <Image src="/images/icons/cross.svg" alt="close filters" width={40} height={40} onClick={() => setIsModalOpen(false)}></Image>
                </CloseButton>
                <TitleDiv>
                    <Title isWhite content="Filter" />
                </TitleDiv>
                <Title isSmall content="Muscle Group" />
                <FilterDiv>
                    {targetMuscleData.map((targetMuscle) => (
                        <BoxLabel toggleFunction={toggleTargetMuscle} checkIfIsSelected={checkIfIsSelected} content={targetMuscle} />
                    ))}
                </FilterDiv>
                <Title isSmall content="Equipment Type" />
                <FilterDiv>
                    {equipmentData.map((equipment) => (
                        <BoxLabel toggleFunction={toggleEquipment} checkIfIsSelected={checkIfIsSelected} content={equipment} />
                    ))}
                </FilterDiv>
                <FinishButton onClick={() => {filterExercises(); setIsModalOpen(false)}}>Apply</FinishButton>
            </ExerciseFilterDiv>
        </>
    )
}

export default ExerciseFilter
