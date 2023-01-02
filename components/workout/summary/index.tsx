import WorkoutSummaryElement from "../summary-element";
import { SummaryDiv } from "./styles";

interface Props {}

const WorkoutSummary = (props: Props) => {
    return (
        <>
            <SummaryDiv>
                <WorkoutSummaryElement value={"28"} info={"workouts completed"} />
                <WorkoutSummaryElement value={"103k"} unit={'kg'} info={"tonnage lifted"} />
                <WorkoutSummaryElement value={"70"} unit={'kg'} info={"current weight"} />
            </SummaryDiv>
        </>
    );
};

export default WorkoutSummary;
