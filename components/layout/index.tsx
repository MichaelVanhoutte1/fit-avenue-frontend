import { useRouter } from 'next/router'
import Navbar from '../navbar'

interface LayoutProps {
    children: any
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter()
    return (
        <>
            <main>{children}</main>
            {router.route !== '/workout-creation' && <Navbar />}
        </>
    )
}

export default Layout
