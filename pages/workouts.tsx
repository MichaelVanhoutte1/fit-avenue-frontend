import Image from "next/image";
import Title from "../components/title";
import Workout from "../components/workout";
import { ActionButton, ActionDiv, HeadDiv, WorkoutsDiv } from "../styles/pages/workouts";

export default function Workouts() {
    return (
        <>
            <HeadDiv>
                <Image src="/images/icons/arrow-left.svg" alt="profile" width={20} height={20} />
                <ActionDiv>
                    <ActionButton>Create</ActionButton>
                    <ActionButton>Edit</ActionButton>
                </ActionDiv>
            </HeadDiv>
            <WorkoutsDiv>
                <Title content="My Workouts" />
                <Workout />
                <Workout />
                <Workout />
            </WorkoutsDiv>
        </>
    );
}
