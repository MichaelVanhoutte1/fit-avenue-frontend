import { DateDiv, Day, Month } from "./styles";

interface Props {
    day: string;
    month: string;
}

const DashboardDate = (props: Props) => {
    const { day, month } = props;
    return (
        <>
            <DateDiv>
                <Day>{day}</Day>
                <Month>{month}</Month>
            </DateDiv>
        </>
    );
};

export default DashboardDate;
