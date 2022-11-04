import { Button, Image, Table } from "react-bootstrap";
import CarouselPageImage from "../../assets/images/carousel.svg";
import '../../assets/css/banner.scss'
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

export default function BannerPage() {

    const userDetails = useSelector((state: any) => state.login.userDetails)

    return (
        <div className="head-text">
            <div className="head-image">
                <Image src={CarouselPageImage} className='banner_image' style={{ paddingLeft: '0px', paddingRight: '0px', width: '100%' }} />
                <div className="background"></div>
            </div>
            <div className='text-on-image'>
                <p className="text"> A cup of coffee lasts only a moment, but it is that moment that makes your day better. </p>
                <Button variant="light" className='bannerBtn'>
                    <p className='bannerBtnTxt'>See Menu</p>
                </Button>
            </div>
            <Container>
                <div className="bannerBottomBox">
                    <Table bordered>
                        <tbody>
                            <tr style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent', textAlign: 'center' }}>
                                <td style={{ borderLeftColor: 'transparent' }}>Name</td>
                                <td>Phone</td>
                                <td>Category</td>
                                <td>Attendance</td>
                                <td style={{ borderRightColor: 'transparent' }}>Time</td>
                            </tr>
                            <tr style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent', textAlign: 'center', paddingTop: '20px' }}>
                                <th style={{ borderLeftColor: 'transparent' }}>{userDetails?.Firstname || 'Prema'}</th>
                                <th>{userDetails?.Mobileno || '7868049366'}</th>
                                <th>{'Expresso'}</th>
                                <th>4 Person</th>
                                <th style={{ borderRightColor: 'transparent' }}>12.00PM</th>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="bookNow">
                        <Button variant="light" className='bannerBtn'>
                            <p className='bannerBtnTxt'>Book Now</p>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}