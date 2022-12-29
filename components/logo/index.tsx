import { LogoImage } from "./styles";

interface Props {}

const Logo = (props: Props) => {
    return (
        <>
            <LogoImage loading="lazy" src="/images/logo.svg" alt="logo" />
        </>
    );
};

export default Logo;
