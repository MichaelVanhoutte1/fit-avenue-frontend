import { LogoImage } from "./styles";

interface Props {}

const DashboardSummary = (props: Props) => {
    return (
        <>
            <LogoImage loading="lazy" src="/images/logo.svg" alt="logo" />
        </>
    );
};

export default DashboardSummary;
