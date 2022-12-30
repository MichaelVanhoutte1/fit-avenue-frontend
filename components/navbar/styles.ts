import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const NavbarDiv = styled.footer`
    position: absolute;
    width: -webkit-fill-available;
    bottom: 0;
    right: 0;
    padding: 0.5rem 1rem;
    border-top: 2px solid ${colors.bordergray};
    background-color: ${colors.whiteText};
    z-index: 1;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
