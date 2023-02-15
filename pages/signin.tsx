import Link from "next/link";
import Logo from "../components/logo";
import {
    ActionDiv,
    HeadDiv,
    InputDiv,
    Label,
    PasswordInput,
    SignInButton,
    Title,
    UserNameInput,
} from "../styles/pages/signin.styled";

export default function SignIn() {
    return (
        <>
            <HeadDiv>
                <Logo />
                <Title>Sign in</Title>
            </HeadDiv>
            <ActionDiv>
                <InputDiv>
                    <Label htmlFor="username">Username</Label>
                    <UserNameInput placeholder="John Doe" id="username" type="text" />
                </InputDiv>
                <InputDiv>
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput id="pasword" type="password" />
                </InputDiv>
                <Link href='/dashboard'><SignInButton>sign in</SignInButton></Link>
            </ActionDiv>
        </>
    );
}
