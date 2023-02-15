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
import Link from "next/link";

export default function Login() {
    return (
        <>
                <HeadDiv>
                    <Logo />
                    <Title>Welcome to Fit Avenue</Title>
                    <SubTitle>Sign up to continue</SubTitle>
                </HeadDiv>
                <ActionDiv>
                    <Link href='/signup'><SignUpButton>sign up</SignUpButton></Link>
                    <SignUpFacebookButton>sign up with facebook</SignUpFacebookButton>
                    <SignInTitle>Already have an account?</SignInTitle>
                    <Link href='/signin'><SignInButton>sign in</SignInButton></Link>
                </ActionDiv>
        </>
    );
}
