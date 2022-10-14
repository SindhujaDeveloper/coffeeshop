import { Image } from "react-bootstrap";
import CarouselPageImage from "../../assets/images/carousel.svg";
import '../../assets/css/banner.css'

export default function BannerPage() {
    return (
        <Image src={CarouselPageImage} className='banner_image' />
    )
}