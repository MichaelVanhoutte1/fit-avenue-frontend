import DashboardPreviousWorkout from "../components/dashboard/dashboard-previous-workout";
import DashboardSummary from "../components/dashboard/dashboard-summary";
import Chart from "../components/line-chart";
import Title from "../components/title";
import {
    ChartContainer,
    ChartDiv,
    ChartHeadDiv,
    HeadDiv,
    WorkoutActionsDiv,
    WorkoutDate,
    WorkoutHeadDiv,
    WorkoutStart,
    WorkoutText,
    WorkoutTitle,
    WorkoutsButton,
    WorkoutsCompletedDiv,
    WorkoutsCompletedText,
    WorkoutsCompletedValue,
    WorkoutsDiv,
} from "../styles/pages/dashboard.styled";

export default function Dashboard() {
    return (
        <>
            <HeadDiv>
                <Title content="Dashboard" />
            </HeadDiv>
            <DashboardSummary />
            <DashboardPreviousWorkout />
            <WorkoutsDiv>
                <WorkoutHeadDiv>
                    <WorkoutText>My Workouts</WorkoutText>
                    <WorkoutsButton>Show all</WorkoutsButton>
                </WorkoutHeadDiv>
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
            </WorkoutsDiv>
        </>
    );
}
