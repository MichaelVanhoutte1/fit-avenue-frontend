import Exercise from "../../components/exercise";
import WorkoutChart from "../../components/workout/chart";
import WorkoutSummary from "../../components/workout/summary";
import { ExerciseDiv, HeadDiv, ImageDiv, WorkoutText } from "../../styles/pages/workout";

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
                <WorkoutText>Exercises</WorkoutText>
                <Exercise src="/images/icons/checkmark.svg" alt='something' name='Bench press'/>
                <Exercise src="/images/icons/checkmark.svg" alt='something' name='Bench press'/>
                <Exercise src="/images/icons/checkmark.svg" alt='something' name='Bench press'/>
            </ExerciseDiv>
        </>
    );
}
