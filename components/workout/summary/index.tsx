import WorkoutSummaryElement from "../summary-element";
import { SummaryDiv } from "./styles";

interface Props {}

const WorkoutSummary = (props: Props) => {
    return (
        <>
            <SummaryDiv>
                <div>
                    <WorkoutSummaryElement value={"7"} info={"workouts completed"} iconSrc='/images/icons/checkmark.svg' iconAlt="workouts completed" />
                    <WorkoutSummaryElement value={"02:24"} unit={"min"} info={"avg rest time"} iconSrc='/images/icons/hourglass.svg' iconAlt="workouts completed"/>
                </div>
                <div>
                    <WorkoutSummaryElement value={"9685"} info={"tonnage lifted"} unit='kg' iconSrc='/images/icons/kettlebell.svg' iconAlt="workouts completed"/>
                    <WorkoutSummaryElement value={"01:12"} unit={"h"} info={"avg workout duration"} iconSrc='/images/icons/timer.svg' iconAlt="workouts completed"/>
                </div>
            </SummaryDiv>
        </>
    );
};

export default WorkoutSummary;
