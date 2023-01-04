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
                    <Image
                        src="/images/icons/arrow-left.svg"
                        alt="profile"
                        width={20}
                        height={20}
                    />
                </ImageDiv>
                <WorkoutChart isHeader />
            </HeadDiv>
            <WorkoutSummary />
            <ExerciseDiv>
                <Title isSmall content="exercises" />
                <Exercise src="/images/icons/checkmark.svg" alt="something" name="Bench press" />
                <Exercise src="/images/icons/checkmark.svg" alt="something" name="Bench press" />
                <Exercise src="/images/icons/checkmark.svg" alt="something" name="Bench press" />
            </ExerciseDiv>
        </>
    );
}
