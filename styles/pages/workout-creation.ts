import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const HeadDiv = styled.div`
    padding: 1rem 0 0 0 ;
    justify-content: space-between;
    background: -webkit-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -o-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -ms-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -moz-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: linear-gradient(125deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
`;

export const TitleDiv = styled.div`
    margin: 1rem 0 ;
`;

export const ImageDiv = styled.div`
    margin: 0 0 0 1rem ;
`;

export const ActionDiv = styled.div`
    padding: 0 0 1rem 0 ;
    display: flex;
    justify-content: space-between;
    margin: 0 1rem ;
`;

export const SelectDiv = styled.div`

`;

export const SubTitle = styled.p`
    margin: .5rem 0 0 1rem ;
    color: ${colors.lightpurple};
`;