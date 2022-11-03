import { Col, Container, Image, Row } from "react-bootstrap";
import BannerPage from "./banner";
import Header from "./header";
import welcomeCoffee from '../assets/images/welcome_coffee.png';
import '../assets/css/index.css'
export default function Main() {

    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <BannerPage />
            </Row>
            <Container>
                <Row style={{ paddingTop: '8%' }}>
                    <Col style={{ textAlign: 'center', paddingTop: '8%', paddingLeft: '2%' }}>
                        <p className="welcome_title">Always Fresh</p>
                        <p className="welcome_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                    </Col>
                    <Col>
                        <Image src={welcomeCoffee} width='98%' />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}