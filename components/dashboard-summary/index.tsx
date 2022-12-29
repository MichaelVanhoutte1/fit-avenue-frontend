import DashboardSummaryElement from "../dashboard-summary-element";
import { SummaryDiv } from "./styles";

interface Props {}

const Logo = (props: Props) => {
    return (
        <>
            <SummaryDiv>
                <DashboardSummaryElement value={"28"} info={"workouts completed"} />
                <DashboardSummaryElement value={"103K"} unit={'kg'} info={"tonnage lifted"} />
                <DashboardSummaryElement value={"70"} unit={'kg'} info={"current weight"} />
            </SummaryDiv>
        </>
    );
};

export default Logo;
