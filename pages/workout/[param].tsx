import Link from "next/link";
import Exercise from "../../components/exercise";
import Title from "../../components/title";
import WorkoutChart from "../../components/workout/chart";
import WorkoutSummary from "../../components/workout/summary";
import { ExerciseDiv, HeadDiv, ImageDiv } from "../../styles/pages/workout";

import Image from "next/image";

export default function WorkoutSpecific() {
    return (
        <>
            <HeadDiv>
                <ImageDiv>
                    <Link href="/workouts">
                        <Image
                            src="/images/icons/arrow-left.svg"
                            alt="profile"
                            width={20}
                            height={20}
                        />
                    </Link>
                </ImageDiv>
                <WorkoutChart isHeader />
            </HeadDiv>
            <WorkoutSummary />
            <ExerciseDiv>
                <Title isSmall content="exercises" />
                <Link href="/exercise/1">
                    <Exercise
                        src="/images/icons/checkmark.svg"
                        alt="something"
                        name="Bench press"
                    />
                </Link>
                <Link href="/exercise/1">
                    <Exercise
                        src="/images/icons/checkmark.svg"
                        alt="something"
                        name="Bench press"
                    />
                </Link>
                <Link href="/exercise/1">
                    <Exercise
                        src="/images/icons/checkmark.svg"
                        alt="something"
                        name="Bench press"
                    />
                </Link>
                <Link href="/exercise/1">
                    <Exercise
                        src="/images/icons/checkmark.svg"
                        alt="something"
                        name="Bench press"
                    />
                </Link>
                <Link href="/exercise/1">
                    <Exercise
                        src="/images/icons/checkmark.svg"
                        alt="something"
                        name="Bench press"
                    />
                </Link>
            </ExerciseDiv>
        </>
    );
}
