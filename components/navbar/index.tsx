import NavbarItem from "../navbar-item";
import { NavbarDiv, Wrapper } from "./styles";

interface Props {}

const Navbar = (props: Props) => {
    return (
        <>
            <NavbarDiv>
                <Wrapper>
                    <NavbarItem src="/images/icons/home.svg" alt="home" content="Dashboard" />
                    <NavbarItem
                        src="/images/icons/chart.svg"
                        alt="statistics"
                        content="Statistics"
                    />
                    <NavbarItem
                        src="/images/icons/calendar.svg"
                        alt="calendar"
                        content="Calendar"
                    />
                </Wrapper>
            </NavbarDiv>
        </>
    );
};

export default Navbar;
