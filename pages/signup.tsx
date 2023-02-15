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
} from "../styles/pages/signup.styled";

export default function SignIn() {
    return (
        <>
            <HeadDiv>
                <Logo />
                <Title>Sign up</Title>
            </HeadDiv>
            <ActionDiv>
                <InputDiv>
                    <Label htmlFor="username">Username</Label>
                    <UserNameInput placeholder="John Doe" id="username" type="text" />
                </InputDiv>
                <InputDiv>
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput placeholder="Enter your password" id="pasword" type="password" />
                </InputDiv>
                <InputDiv>
                    <Label htmlFor="confirmpassword">Password</Label>
                    <PasswordInput placeholder="Repeat your password" id="confirmpasword" type="password" />
                </InputDiv>
                <Link href='/dashboard'><SignInButton>Create account</SignInButton></Link>
            </ActionDiv>
        </>
    );
}
