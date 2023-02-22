import Exercise from "../exercise";
import Title from "../title";
import { ExerciseDiv, TitleDiv } from "./styles";
import data from "../../data/exercises.json";
import RenderIfVisible from "react-render-if-visible";

interface Props {}

interface Exercise {
    name: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    target: string;
    id: string;
}

const ExerciseLibrary = (props: Props) => {
    const {} = props;

    return (
        <>
            <ExerciseDiv>
                <TitleDiv>
                    <Title isSmall content="library" />
                </TitleDiv>
                {data.map((item) => (
                    <RenderIfVisible defaultHeight={84}>
                        <Exercise
                            forLibrary
                            name={item.name}
                            src={item.gifUrl}
                            alt={item.name + " exercise image"}
                            key={item.id}
                            label={item.bodyPart}
                        />
                    </RenderIfVisible>
                ))}
            </ExerciseDiv>
        </>
    );
};

export default ExerciseLibrary;
