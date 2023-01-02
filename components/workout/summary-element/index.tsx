import { SummaryElement, ValueText, ValueInfoText, UnitText, ValueDiv, TextContent, ImageContent } from "./styles";
import Image from "next/image";

interface Props {
    value: string;
    info: string;
    iconSrc: string;
    iconAlt: string;
    unit?: string;
}

const WorkoutSummaryElement = (props: Props) => {
    const { value, info, unit, iconAlt, iconSrc } = props;

    return (
        <>
            <SummaryElement>
                <ImageContent>
                <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
                </ImageContent>
                <TextContent>
                    <ValueDiv>
                        <ValueText>{value}</ValueText>
                        {unit && <UnitText>{unit}</UnitText>}
                    </ValueDiv>
                    <ValueInfoText>{info}</ValueInfoText>
                </TextContent>
            </SummaryElement>
        </>
    );
};

export default WorkoutSummaryElement;
