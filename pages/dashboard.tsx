import Image from "next/image";
import DashboardPreviousWorkout from "../components/dashboard/dashboard-previous-workout";
import DashboardSummary from "../components/dashboard/dashboard-summary";
import Title from "../components/title";
import Workout from "../components/workout";
import {
    HeadDiv,
    WorkoutHeadDiv,
    WorkoutText,
    WorkoutsButton,
    WorkoutsDiv,
} from "../styles/pages/dashboard.styled";

export default function Dashboard() {
    return (
        <>
            <HeadDiv>
                <Title content="Dashboard" />
                <Image src="/images/icons/user.svg" alt="profile" width={30} height={30} />
            </HeadDiv>
            <DashboardSummary />
            <DashboardPreviousWorkout />
            <WorkoutsDiv>
                <WorkoutHeadDiv>
                    <WorkoutText>My Workouts</WorkoutText>
                    <WorkoutsButton>Show all</WorkoutsButton>
                </WorkoutHeadDiv>
                <Workout/>
            </WorkoutsDiv>
        </>
    );
}
