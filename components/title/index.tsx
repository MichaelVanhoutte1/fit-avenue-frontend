import { Text } from "./styles";
import cs from "classnames";

interface Props {
    content: string;
    isSmall?: boolean
}

const Title = (props: Props) => {
const {content, isSmall} = props;

    return (
        <>
            <Text className={cs({small: isSmall})}>{content}</Text>
        </>
    );
};

export default Title;
