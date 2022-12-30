import Navbar from "../navbar";

interface LayoutProps {
    children: any;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <main>{children}</main>
            <Navbar />
        </>
    );
};

export default Layout;
