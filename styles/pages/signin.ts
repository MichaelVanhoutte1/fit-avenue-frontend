import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const Title = styled.h1`
    color: ${colors.blackText};
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05rem;
`;

export const SubTitle = styled.h1`
    color: ${colors.blackText};
    font-weight: 400;
`;

export const ActionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 27vh 0 0 auto;
`;

export const HeadDiv = styled.div`
    display: block;
    width: fit-content;
    margin: 10vh 0 0 2rem;
`;

export const UserNameInput = styled.input`
    background: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 300;
    outline: none;
`;

export const PasswordInput = styled.input`
    background: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 300;
    outline: none;
`;

export const Label = styled.label`
    color: ${colors.whiteText};
    margin: auto 0.5rem auto 0;
    font-size: 0.9rem;
    font-weight: 300;
`;

export const InputDiv = styled.div`
    display: flex;
    margin: .5rem auto;
    padding: 0.5rem;
    width: 100%;
    background: -webkit-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -o-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -ms-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -moz-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: linear-gradient(125deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    width: 20rem;
`;

export const SignInButton = styled.button`
    color: ${colors.purple};
    background: linear-gradient(125deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    padding: 0.5rem 1rem;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    text-align: end;
    letter-spacing: 0.1rem;
    margin: 0 auto;
`;