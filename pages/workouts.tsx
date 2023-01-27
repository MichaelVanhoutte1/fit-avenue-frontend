import Image from "next/image";
import Title from "../components/title";
import WorkoutChart from "../components/workout/chart";
import { ActionButton, ActionDiv, HeadDiv, WorkoutsDiv } from "../styles/pages/workouts";
import Link from "next/link";

export default function WorkoutCharts() {
    return (
        <>
            <HeadDiv>
                <Link href="/dashboard">
                    <Image
                        src="/images/icons/arrow-left.svg"
                        alt="profile"
                        width={20}
                        height={20}
                    />
                </Link>
                <ActionDiv>
                    <Link href="/workout-creation">
                        <ActionButton>Create</ActionButton>
                    </Link>
                    <Link href="/workout-creation">
                        <ActionButton>Edit</ActionButton>
                    </Link>
                </ActionDiv>
            </HeadDiv>
            <WorkoutsDiv>
                <Title content="My Workouts" />
                <Link href="/workout/1">
                    <WorkoutChart />
                </Link>
                <Link href="/workout/1">
                    <WorkoutChart />
                </Link>
                <Link href="/workout/1">
                    <WorkoutChart />
                </Link>
            </WorkoutsDiv>
        </>
    );
}
