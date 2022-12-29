import DashboardSummary from "../components/logo";
import Title from "../components/title";
import {
    HeadDiv, PreviousWorkoutDiv, SummaryDiv, WorkoutsDiv,
} from "../styles/pages/dashboard.styled";

export default function Dashboard() {
    return (
        <>
                <HeadDiv>
                    <Title content="Dashboard" />
                </HeadDiv>
                <DashboardSummary/>
                <PreviousWorkoutDiv>

                </PreviousWorkoutDiv>
                <WorkoutsDiv>
                    
                </WorkoutsDiv>
        </>
    );
}
