import { Container, Row } from "react-bootstrap";
import BannerPage from "./banner";
import Header from "./header";

export default function Main() {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <BannerPage />
            </Row>
        </Container>
    )
}