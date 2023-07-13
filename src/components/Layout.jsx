import { Container } from "react-bootstrap";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container style={{ 'paddingTop': '20px' }}>
                { children }
            </Container>
        </>
    );
};

export default Layout;