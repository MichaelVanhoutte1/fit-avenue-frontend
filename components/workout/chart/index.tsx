import Image from "next/image";
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
    ActionsButton,
    ActionsDiv,
    ActionToggle
} from "./styles";
import cs from "classnames";
import { useState, MouseEvent } from "react";

interface Props {
    isHeader?: boolean;
}

export default function WorkoutChart(props: Props) {
    const [showActions, setShowActions] = useState(false);
    const { isHeader } = props;

    const toggleShowActions = (e: MouseEvent) => {
        e.preventDefault();
        setShowActions(!showActions);
    }
    return (
        <>
            <ChartDiv className={cs({ header: isHeader })}>
                <ActionToggle onClick={(e: MouseEvent) => toggleShowActions(e)}><Image src='images/icons/actions.svg' alt='actions' width={20} height={20}/></ActionToggle>
                <ActionsDiv className={cs({ showActions: showActions })}>
                    <ActionsButton>Edit</ActionsButton>
                    <ActionsButton>Delete</ActionsButton>
                </ActionsDiv>
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
