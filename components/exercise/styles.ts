import styled from 'styled-components'
import { colors } from '../../styles/variables.styled'

export const ExerciseDiv = styled.div`
    width: fill-available;
    display: flex;
    border: 1px solid ${colors.bordergray};
    background-color: ${colors.whiteText};
    padding: 1rem;
    margin: 1rem 1rem 0 1rem;
    &.libraryExercise {
        margin: 0;
    }
    &.isSelected {
        background-color: ${colors.lightgray};
    }
    &.isDropdown {
        flex-direction: column;
    }
`

export const ValueDiv = styled.div`
    margin: auto auto auto 1rem;
`

export const ValueText = styled.p`
    font-size: 0.9rem;
`

export const ExerciseName = styled.p`
    margin: auto 0 0.25rem 0;
    font-size: 1.2rem;
    font-weight: 500;
`

export const BoxLabel = styled.div`
    border: 2px solid ${colors.bordergray};
    width: fit-content;
    padding: 0.15rem 0.5rem;
    font-size: 0.8rem;
    margin: 0.15rem;
`

export const MuscleGroupsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ImageDiv = styled.div`
    margin: auto 0 auto auto;
    transition: transform 0.3s;
        &.isDropdownActive {
            transform: rotate(180deg);
        }
`

export const DropdownValueDiv = styled.div`
    width: 3rem;
    margin: 0 auto;
`

export const OutputValue = styled.span`
    background: transparent;
    outline: none;
    border: none;
    color: ${colors.darkblueText};
    font-size: 1.6rem;
`

export const UnitText = styled.p`
    font-size: 0.9rem;
`

export const ConfigurationDiv = styled.div`
    display: flex;
    padding: 0.6rem 1rem;
`

export const SetText = styled.p`
    margin: auto 0;
    text-transform: uppercase;
`

export const Divider = styled.p`
    font-size: 1.6rem;
    margin: auto 0;
`

export const HeadDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0 0.5rem 0;
`

export const DropdownDiv = styled.div`
    display: none;
    &.isDropdownActive {
        display: block;
    }
`