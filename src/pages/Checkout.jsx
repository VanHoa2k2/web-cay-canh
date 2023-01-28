import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/Checkout.css";
import {useSelector} from "react-redux";

const Checkout = () => {

  const totalQty = useSelector((state) => state.cart.totalQuantity)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const shipping = 20000

  return (
    <Helmet title="Thanh Toán">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Thông Tin Thanh Toán</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Họ và Tên" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Địa Chỉ Email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Số Điện Thoại" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Địa Chỉ" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Tỉnh / Thành Phố" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Mã Bưu Điện" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Quốc Gia" />
                </FormGroup>
              </Form>
            </Col>

            <Col>
              <div className="checkout__cart">
                <h6>
                  Tổng Số Lượng: <span>{totalQty} Sản Phẩm</span>
                </h6>
                <h6>
                  Thành Tiền: <span>{totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</span>
                </h6>
                <h6>
                  <span>
                    Phí Vận Chuyển:
                  </span>
                  <span>{shipping.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</span>
                </h6>
                <h4>
                  Tổng chi phí: <span>{(totalAmount + shipping).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Đặt Hàng
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
