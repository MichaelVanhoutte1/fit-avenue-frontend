import { Text } from "./styles";
import cs from "classnames";

interface Props {
    content: string;
    isSmall?: boolean
    isWhite?: boolean
}

const Title = (props: Props) => {
const {content, isSmall, isWhite} = props;

    return (
        <>
            <Text className={cs({small: isSmall, white : isWhite})}>{content}</Text>
        </>
    );
};

export default Title;
