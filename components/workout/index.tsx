import Chart from "../line-chart";
import {
    ChartContainer,
    ChartDiv,
    ChartHeadDiv,
    WorkoutActionsDiv,
    WorkoutDate,
    WorkoutStart,
    WorkoutTitle,
    WorkoutsCompletedDiv,
    WorkoutsCompletedText,
    WorkoutsCompletedValue,
} from "./styles";

export default function Dashboard() {
    return (
        <>
                <ChartDiv>
                    <ChartHeadDiv>
                        <WorkoutTitle>Chest & Back</WorkoutTitle>
                        <WorkoutDate>Mon, May 8</WorkoutDate>
                        </ChartHeadDiv>
                    <ChartContainer>
                        <Chart />
                    </ChartContainer>
                    <WorkoutActionsDiv>
                        <WorkoutsCompletedDiv>
                            <WorkoutsCompletedValue>7</WorkoutsCompletedValue>
                            <WorkoutsCompletedText>times completed</WorkoutsCompletedText>
                        </WorkoutsCompletedDiv>
                        <WorkoutStart>start</WorkoutStart>
                    </WorkoutActionsDiv>
                </ChartDiv>
        </>
    );
}
