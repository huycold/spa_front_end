import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";
import "./About.css";

class About extends Component {
    render() {
        return (
            <div>
                <div className="overlay_background" style={{ backgroundImage: "url(./about.jpg)" }} >
                    <div className='overlay_background1'>
                        <h2>GIỚI THIỆU</h2>
                    </div>
                </div>
                <Container>
                    <h2 className="commitment">CAM KẾT CỦA CHÚNG TÔI</h2>
                    <h3 className="commitment_content">“Hít thở bình yên, thở ra căng thẳng. Thư giãn có thể mang lại sự nhẹ nhõm cho phần lớn những gì
                    khiến bạn cảm thấy khó chịu. Trong thế giới căng thẳng và thường xuyên tiêu cực của chúng tôi,
                     quyết định ưu tiên thư giãn của bạn sẽ giúp bạn điều hướng, xử lý và giảm thiểu căng thẳng”</h3>
                    <div style={{ textAlign: "center", marginTop: '40px', marginBottom: '80px' }}>
                        <div className="divider"></div>
                        <i className="fa fa-leaf iconLeaf"></i>
                        <div className="divider"></div>
                    </div>
                </Container>
                <Container fluid>
                    <Row style={{ marginRight: '30px', marginLeft: '30px' }}>
                        <Col md="6">
                            <div className="cardAbout" >
                                <h2>GÓI & GIÁ</h2>
                                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/06/how-can-make-sure-prenatal-massage-safe-2160X1200-1024x569.jpg"></img>
                                <p>Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                                readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean
                                vinegar stumptown yr pop-up artisan sunt. Craft beer elit seitan
                                exercitation, photo booth.</p>
                                <a href="/">Xem giá</a>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="cardAbout" >
                                <h2>SPA CỦA CHÚNG TÔI</h2>
                                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/06/slice-1-1024x569.jpg"></img>
                                <p>Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                                readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean
                                vinegar stumptown yr pop-up artisan sunt. Craft beer elit seitan
                                exercitation, photo booth.</p>
                                <a href="/">Xem bộ sưu tập</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="overlay_background" style={{ marginTop: '40px', backgroundImage: "url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/05/p1270064.jpg)" }} >
                    <div className='overlay_background1'>
                        <h2>ĐỘI NGŨ CỦA CHÚNG TÔI.</h2>
                        <div className="comex">SẼ LUÔN LÀM BẠN HÀI LÒNG.</div>
                    </div>
                </div>
                <Container fluid>
                    <Row style={{ margin: '30px' }}>
                        <Col md="4">
                            <div className="member">
                                <div className="bao_chu_anh" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/05/team-9-2-610x610.jpg"></img>
                                    <ul>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="/"><i className="fab fa-google"></i></a></li>
                                        <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>

                                <h4>Joanna Wang</h4>
                                <div className="major">MASSAGE SPECIALIST</div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                natoque penatibus eur ridiculus mus.</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="member">
                                <div className="bao_chu_anh" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/06/team-11-2-610x610.jpg"></img>
                                    <ul>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="/"><i className="fab fa-google"></i></a></li>
                                        <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                                <h4>Espen Brunberg</h4>
                                <div className="major">SKIN SPECIALIST</div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                natoque penatibus eur ridiculus mus.</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="member">
                                <div className="bao_chu_anh" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandspa/demo/wp-content/uploads/2017/06/team-12-2-610x610.jpg"></img>
                                    <ul>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="/"><i className="fab fa-google"></i></a></li>
                                        <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                                <h4>John Doe</h4>
                                <div className="major">THERAPEUTIC SPECIALIT</div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                natoque penatibus eur ridiculus mus.</p>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center", marginTop: '40px', marginBottom: '80px' }}>
                        <div className="divider"></div>
                        <i className="fa fa-leaf iconLeaf"></i>
                        <div className="divider"></div>
                    </div>
                    <Row style={{ marginRight: '30px', marginLeft: '30px' }}>
                        <Col md="6">
                            <div className="cardAbout" >
                                <h2>TRIẾT LÝ CỦA CHÚNG TÔI</h2>
                                <p>Meh synth Schlitz, tempor duis single-origin coffee
                                ea next level ethnic fingerstache fanny pack nostrud.
                                Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.
                                Salvia esse nihil, flexitarian Truffaut synth art party deep
                                v chillwave.Seitan High Life reprehenderit consectetur cupidatat
                                kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork
                                selfies master cleanse</p>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="cardAbout" >
                                <h2>CHẤT LƯỢNG TỐT NHẤT</h2>
                                <h3 className="quality">“All those kisses. There must have been a thousand. They
                                engulfed me like some kind of all consuming dream where I
                                became very alive and very relaxed at the same time.”</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default About;
