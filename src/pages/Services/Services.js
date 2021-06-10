import axios from 'axios';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "reactstrap";

export default class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardService: [],
            numberItems: 3
        }
    }
    componentDidMount() {
        axios.get("/service/").then(res => {
            this.setState({
                cardService: res.data
            });
            console.log(res.data)
        });
    }
    componentWillMount() {
        if (window.innerWidth < 900) this.setState({ numberItems: 2 })
        if (window.innerWidth < 750) this.setState({ numberItems: 1 })
        window.addEventListener('resize', () => {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            if (window.innerWidth >= 1000) this.setState({ numberItems: 3 })
            if (window.innerWidth < 1000) this.setState({ numberItems: 2 })
            if (window.innerWidth < 750) this.setState({ numberItems: 1 })
        })
    }
    render() {
        const { cardService, numberItems } = this.state;
        return (
            <div>
                <div className="overlay_background" style={{ backgroundImage: "url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/02/azure-spa2.jpg)" }} >
                    <div className='overlay_background1'>
                        <h2>DỊCH VỤ</h2>
                    </div>
                </div>
                <Container style={{ marginTop: '50px' }}>
                    <Row>
                        <Col lg="6">
                            <div className="secret_text">
                                <h2>Gói bạc</h2>
                                <p>Drinking vinegar stumptown yr pop-up artisan sunt. Deep v
                                cliche lomo biodiesel Neutra selfies. Shorts fixie consequat
                                flexitarian four loko tempor duis single-origin coffee. Banksy,
                                elit small batch freegan sed. Aenean massa. Cum sociis natoque
                        penatibus eur ridiculus mus</p>
                                <a href="ok"></a>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="secret_img"></div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '30px' }}>
                        <Col lg="6">
                            <div className="secret_img_second"></div>
                        </Col>
                        <Col lg="6">
                            <div className="secret_text">
                                <h2>Gói vàng</h2>
                                <p>Drinking vinegar stumptown yr pop-up artisan sunt. Deep v
                                cliche lomo biodiesel Neutra selfies. Shorts fixie consequat
                                flexitarian four loko tempor duis single-origin coffee. Banksy,
                                elit small batch freegan sed. Aenean massa. Cum sociis natoque
                        penatibus eur ridiculus mus</p>
                                <a href="ok"></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="overlay_background" style={{ marginTop: '40px', backgroundImage: "url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/05/p1270064.jpg)" }} >
                    <div className='overlay_background1'>
                        <h2>Với nhiều năm kinh nghiệm.</h2>
                        <div className="comex">Chúng tôi sẽ mang lại cho bạn cảm giác thoả mái nhất.</div>
                    </div>
                </div>
                <Container>
                    <Row style={{ marginBottom: '30px', marginTop: '40px' }}>
                        {cardService.length && <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={10}
                            nav
                            items={numberItems}
                        >
                            {cardService.map((item, index) => (
                                <Col key={index}>
                                    <div className="cardService">
                                        <img src={item.img} alt="our service"></img>
                                        <div className="serviceContent">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                            <Link to="/membershipcards" className="readmore">VIEW PRICING</Link>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </OwlCarousel>
                        }

                    </Row>
                </Container>
                <div className="overlay_background" style={{ marginTop: '60px', marginBottom: "1px", backgroundImage: "url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/02/eforea-Relaxation-Room.jpg" }} >
                    <div className='overlay_background1'>
                        <h2>Thư giãn. Không còn vượt quá ngân sách của bạn</h2>
                        <div className="comex">HÃY ĐẾN KINH NGHIỆM BÍ MẬT THƯ GIÃN.</div>
                    </div>
                </div>
            </div>
        )
    }
}
