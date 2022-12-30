import styled from "styled-components";
import { colors } from "../../../styles/variables.styled";

export const SummaryElement = styled.div`
    width: 33vw;
    padding: 0.5rem 0;
    padding-left: 1rem;
    &:nth-child(2) {
        border-right: 2px solid ${colors.bordergray};
        border-left: 2px solid ${colors.bordergray};
    }
`;

export const ValueDiv = styled.div`
    display: flex;
`;

export const ValueText = styled.p`
    font-size: 1.5rem;
    color: ${colors.darkblueText};
`;

export const ValueInfoText = styled.p`
    color: ${colors.darkblueText};
`;

export const UnitText = styled.p`
    margin-left: 0.5rem;
    margin-top: auto;
`;
