import Exercise from "../exercise";
import Title from "../title";
import { ExerciseDiv, TitleDiv } from "./styles";
import data from "../../data/exercises.json";
import { List } from "react-virtualized";

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

    const renderRow = (row: object) => (
        <>
            <Exercise
                forLibrary
                name={data[row.index].name}
                src={data[row.index].gifUrl}
                alt={data[row.index].name + " exercise image"}
                key={data[row.index].id}
                label={data[row.index].bodyPart}
            />
        </>
    );

    return (
        <>
            <ExerciseDiv>
                <TitleDiv>
                    <Title isSmall content="library" />
                </TitleDiv>
                <List
                    width={1200}
                    height={435}
                    // @ts-ignore
                    rowRenderer={renderRow}
                    rowCount={data.length}
                    rowHeight={84}
                />
            </ExerciseDiv>
        </>
    );
};

export default ExerciseLibrary;
