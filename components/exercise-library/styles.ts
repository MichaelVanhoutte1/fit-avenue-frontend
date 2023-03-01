import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const ExerciseDiv = styled.div`
    overflow-y: scroll;
    max-height: calc(100vh - 175px);
    width: 100vw;
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: ${colors.bordergray};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${colors.darkblueText};
    }
`;

export const TitleDiv = styled.div`
    padding: 1rem 0;
`;
