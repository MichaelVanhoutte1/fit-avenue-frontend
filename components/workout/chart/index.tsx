import Chart from "../../line-chart";
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
import cs from "classnames";

interface Props {
    isHeader?: boolean;
}

export default function WorkoutChart(props: Props) {
    const { isHeader } = props;
    return (
        <>
            <ChartDiv className={cs({ header: isHeader })}>
                <ChartHeadDiv>
                    <WorkoutTitle>Chest & Back</WorkoutTitle>
                    <WorkoutDate>Mon, May 8</WorkoutDate>
                </ChartHeadDiv>
                <ChartContainer>
                    <Chart />
                </ChartContainer>
                <WorkoutActionsDiv className={cs({ header: isHeader })}>
                    {!isHeader && (
                        <WorkoutsCompletedDiv>
                            <WorkoutsCompletedValue>7</WorkoutsCompletedValue>
                            <WorkoutsCompletedText>times completed</WorkoutsCompletedText>
                        </WorkoutsCompletedDiv>
                    )}
                    <WorkoutStart className={cs({ header: isHeader })}>start</WorkoutStart>
                </WorkoutActionsDiv>
            </ChartDiv>
        </>
    );
}
