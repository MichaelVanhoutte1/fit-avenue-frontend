import Logo from "../components/logo";
import {
    Title,
    SubTitle,
    SignUpButton,
    SignUpFacebookButton,
    SignInTitle,
    SignInButton,
    ActionDiv,
    HeadDiv,
} from "../styles/pages/login.styled";

export default function Login() {
    return (
        <>
                <HeadDiv>
                    <Logo />
                    <Title>Welcome to Fit Avenue</Title>
                    <SubTitle>Sign up to continue</SubTitle>
                </HeadDiv>
                <ActionDiv>
                    <SignUpButton>sign up</SignUpButton>
                    <SignUpFacebookButton>sign up with facebook</SignUpFacebookButton>
                    <SignInTitle>Already have an account?</SignInTitle>
                    <SignInButton>sign in</SignInButton>
                </ActionDiv>
        </>
    );
}
