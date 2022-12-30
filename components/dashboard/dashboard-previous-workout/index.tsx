import DashboardDate from "../dashboard-date";
import { SummaryDiv, WorkoutDiv, PreviousWorkoutText, WorkoutName, Exercises, DateDiv } from "./styles";

interface Props {}

const DashboardPreviousWorkout = (props: Props) => {
    return (
        <>
            <SummaryDiv>
                <DateDiv>
                    <DashboardDate day={"28"} month={"May"} />
                </DateDiv>
                <WorkoutDiv>
                    <PreviousWorkoutText>Previous Workout</PreviousWorkoutText>
                    <WorkoutName>Quads & Deltoids</WorkoutName>
                    <Exercises>7 exercises completed</Exercises>
                </WorkoutDiv>
            </SummaryDiv>
        </>
    );
};

export default DashboardPreviousWorkout;
