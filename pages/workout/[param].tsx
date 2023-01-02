import WorkoutChart from "../../components/workout/chart";
import WorkoutSummary from "../../components/workout/summary";
import { ExerciseDiv, HeadDiv, ImageDiv, WorkoutText } from "../../styles/pages/workout";
import Exercise from "../exercise/[param]";
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
                <Exercise />
                <Exercise />
                <Exercise />
            </ExerciseDiv>
        </>
    );
}
