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
} from "../styles/pages/signin";

export default function SignIn() {
    return (
        <>
            <HeadDiv>
                <Logo />
                <Title>Sign in</Title>
            </HeadDiv>
            <ActionDiv>
                <InputDiv>
                    <Label for="username">Username</Label>
                    <UserNameInput placeholder="John Doe" id="username" type="text" />
                </InputDiv>
                <InputDiv>
                    <Label for="password">Password</Label>
                    <PasswordInput id="pasword" type="password" />
                </InputDiv>
                <Link href='/dashboard'><SignInButton>sign in</SignInButton></Link>
            </ActionDiv>
        </>
    );
}
