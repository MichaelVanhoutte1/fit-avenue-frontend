import Navbar from "../navbar";

interface LayoutProps {
    children: any;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            {children}
            <Navbar />
        </>
    );
};

export default Layout;
