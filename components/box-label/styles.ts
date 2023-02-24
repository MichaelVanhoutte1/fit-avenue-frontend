import styled from 'styled-components'
import { colors } from '../../styles/variables.styled'

export const BoxLabelDiv = styled.div`
    width: fit-content;};
    background-color: ${colors.mediumDarkBlue};
    color: ${colors.whiteText};
    padding: .75rem 1.2rem;
    margin:.25rem;
    border-radius: 2px;
    &.isSelected{
        background-color: ${colors.whiteText};
        color: ${colors.mediumDarkBlue};
    }
`

export const Label = styled.p``
