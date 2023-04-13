import { BoxLabelDiv, Label } from './styles'
import cs from 'classnames'

interface Props {
    content: string
    checkIfIsSelected: (item: string) => boolean
    toggleFunction: (item: string) => void
}

const BoxLabel = (props: Props) => {
    const { content, checkIfIsSelected, toggleFunction } = props

    return (
        <>
            <BoxLabelDiv onClick={() => toggleFunction(content)} className={cs({ isSelected: checkIfIsSelected(content) })}>
                <Label>{content.charAt(0).toUpperCase() + content.slice(1)}</Label>
            </BoxLabelDiv>
        </>
    )
}

export default BoxLabel
