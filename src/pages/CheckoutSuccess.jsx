import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkoutSuccess.css";

const CheckoutSuccess = () => {
  const [codeBill, setCodeBill] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        "https://json-cay-canh.vercel.app/json_HoaDon"
      );
      setCodeBill(res.data.pop()._id);
      setLoading(false);
    };
    fetchApi();
  }, []);
  return (
    <Helmet title="Đặt Hàng Thành Công">
      <CommonSection title="Đặt Hàng Thành Công" />
      <section>
        <Container>
          <Row>
            <Col className="text-center checkout__success">
              <h6>Congratulations on your successful order</h6>
              <p>Your order code is:</p>
              <h5>{loading ? "loading...." : codeBill}</h5>
              <p>Chùng tôi sẽ liên hệ quý khách trong thời gian sớm nhất</p>
              <p>Chúc quý khách có một ngày tốt lành</p>
              <button
                className="buy__btn"
                onClick={() => navigate("/cua-hang")}
              >
                Tiếp tục mua hàng
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckoutSuccess;
