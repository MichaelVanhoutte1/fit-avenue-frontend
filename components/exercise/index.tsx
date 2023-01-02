import { SummaryElement, ValueText, ValueInfoText, UnitText, ValueDiv } from "./styles";

interface Props {
    value: string;
    info: string;
    unit?: string;
}

const Exercise = (props: Props) => {
    const { value, info, unit } = props;

    return (
        <>
            <SummaryElement>
                <ValueDiv>
                    <ValueText>{value}</ValueText>
                    {unit && <UnitText>{unit}</UnitText>}
                </ValueDiv>
                <ValueInfoText>{info}</ValueInfoText>
            </SummaryElement>
        </>
    );
};

export default Exercise;
