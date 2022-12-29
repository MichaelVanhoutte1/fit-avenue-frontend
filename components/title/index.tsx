import { Text } from "./styles";

interface Props {
    content: string;
}

const Title = (props: Props) => {
const {content} = props;

    return (
        <>
            <Text>{content}</Text>
        </>
    );
};

export default Title;
