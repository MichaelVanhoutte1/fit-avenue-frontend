import NavbarItem from '../navbar-item'
import { NavbarDiv, Wrapper } from './styles'

interface Props {}

const Navbar = (props: Props) => {
    return (
        <>
            <NavbarDiv>
                <Wrapper>
                    <NavbarItem href="/dashboard" src="/images/icons/home.svg" alt="home" content="Dashboard" />
                    <NavbarItem href="/workouts" src="/images/icons/kettlebell.svg" alt="workouts" content="Workouts" />
                    <NavbarItem href="/statistics" src="/images/icons/chart.svg" alt="statistics" content="Statistics" />
                </Wrapper>
            </NavbarDiv>
        </>
    )
}

export default Navbar
