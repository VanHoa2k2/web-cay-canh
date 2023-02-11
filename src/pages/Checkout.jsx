import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/Checkout.css";
import { useSelector } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shipping = 20000;

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      address: "",
      province: "",
      zipcode: "",
      country: "",
    },

    onSubmit: async (values) => {
      const {username, email, phone, address, zipcode, country} = values
      console.log(username)
      console.log(totalAmount + shipping)
      toast.success("Đặt Hàng Thành Công");
      navigate("/thanh-toan-thanh-cong");
    },
  });

  return (
    <Helmet title="Thanh Toán">
      <CommonSection title="Thanh Toán" />
      <section>
        <Form onSubmit={formik.handleSubmit}>
          <Container>
            <Row>
              <Col lg="8">
                <h6 className="mb-4 fw-bold">Thông Tin Thanh Toán</h6>
                <Form className="billing__form">
                  <FormGroup className="form__group">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Họ và Tên"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Địa Chỉ Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      id="phone"
                      name="phone"
                      type="number"
                      placeholder="Số Điện Thoại"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Địa Chỉ"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      id="province"
                      name="province"
                      type="text"
                      placeholder="Tỉnh / Thành Phố"
                      value={formik.values.province}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      placeholder="Mã Bưu Điện"
                      value={formik.values.zipcode}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Quốc Gia"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>
                </Form>
              </Col>

              <Col>
                <div className="checkout__cart">
                  <h6>
                    Tổng Số Lượng: <span>{totalQty} Sản Phẩm</span>
                  </h6>
                  <h6>
                    Thành Tiền:{" "}
                    <span>
                      {totalAmount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      VNĐ
                    </span>
                  </h6>
                  <h6>
                    <span>Phí Vận Chuyển:</span>
                    <span>
                      {shipping
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      VNĐ
                    </span>
                  </h6>
                  <h4>
                    Tổng chi phí: {" "}
                    <span>
                       {(totalAmount + shipping)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      VNĐ
                    </span>
                  </h4>
                  <button type="submit" className="buy__btn auth__btn w-100">
                    Đặt Hàng
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      </section>
    </Helmet>
  );
};

export default Checkout;
