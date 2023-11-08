import React from "react";
import logo from "../../assets/images/678888.png";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <Link to="/trang-chu">
              <div className="logo__footer">
                <img src={logo} alt="" />
                <div>
                  <h1>Độc Lạ</h1>
                  <p>Cây Cảnh</p>
                </div>
              </div>
            </Link>
            <p className="footer__text mt-4">
              Ngoài ra nếu quý khách không mua cây tại cửa hàng, mà mua ở bất kỳ
              đâu khi gặp vấn đề hãy cứ liên hệ với chúng tôi, chúng tôi sẵn
              sàng tư vấn miễn phí và nhiệt tình, để cây có thể tốt trở lại.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Danh Mục</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Cây Cảnh Để Bàn</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Cây Cảnh Thủy Sinh</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Cây Cảnh Nội Thất</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Sen Đá, Xương Rồng</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Cây Bonsai</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Đường Dẫn</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cua-hang">Cửa Hàng</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/gio-hang">Giỏ Hàng</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/dang-nhap">Đăng Nhập</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Chính Sách Bảo Mật</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Liên Hệ</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>An Châu, Châu Thành, An Giang</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>0949983925</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>hoab2017041@student.ctu.edu.vn</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Hoa Pham. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
