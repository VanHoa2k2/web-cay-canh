import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Col, Container, Row } from "reactstrap";
import decorateImg from "../assets/images/xbg_tit.png.pagespeed.ic.vrv94MdjpM.png";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import CategorySection from "../components/UI/CategorySection";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        "https://json-cay-canh-ntv9jklzz-vanhoa2k2.vercel.app/json_CayCanh"
      );
      setProducts(res.data);
      setLoading(false);
    };
    fetchApi();
  }, []);

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.trendingProduct === true
    );

    const filteredNewProducts = products.filter(
      (item) => item.newProduct === true
    );

    setTrendingProducts(filteredTrendingProducts);
    setNewProducts(filteredNewProducts);
  }, [products]);

  return (
    <Helmet title={"Trang Chủ"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="12" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Xu Hướng Của Năm {year}</p>
                <h2>Mang hơi mát trong lành đến với gia đình bạn</h2>
                <p>
                  - Cây cảnh, từ trước đến nay vẫn được xem như vật trang trí,
                  làm đẹp không gian sống cho con người. Cây để bàn, bonsai,
                  terrarium, cây thuỷ sinh hoặc cây treo chậu… mỗi loại mỗi cây
                  đều có ý nghĩa và vẻ đẹp riêng của mình, góp phần đáng kể làm
                  cho cuộc sống chúng ta thêm sinh động, trở nên đáng yêu và
                  thanh bình hơn. Thông qua loại cây bạn chọn, bạn sẽ thể hiện được cá tính và
                  những gì độc đáo của bản thân mà không cần nói ra mà người
                  khác đã tự hiểu.
                </p>
                <p>
                  - Chúng tôi cung cấp đầy đủ các loại cây như cây nội thất,
                  ngoại thất, cây văn phòng, cây công trình, cây ăn quả, hoa &
                  quà tặng khai trương, tân gia.
                </p>
                <h5 whileTap={{ scale: 1.2 }}>
                  <Link to="/cua-hang">Đến Cửa Hàng Ngay</Link>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <img src={decorateImg} alt="" className="decorate__img" />
              <h2 className="section__title">Cây Cảnh Bán Chạy</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading.......</h5>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="12" md="12" className="count__down-col text-center">
              <div className="clock__top-content">
                <h3 className="text-white fs-5 mb-3">
                  Làm Đẹp Không Gian Sống Của Bạn
                </h3>
                <h3 className="text-white fs-5 mb-2">Ưu Đãi Có Hạn</h3>
              </div>

              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/cua-hang">Cửa Hàng</Link>
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <img src={decorateImg} alt="" className="decorate__img" />
              <h2 className="section__title">Sản Phẩm Mới</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading.......</h5>
            ) : (
              <ProductsList data={newProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <img src={decorateImg} alt="" className="decorate__img" />
              <h2 className="section__title">Danh Mục Nổi Bật</h2>
            </Col>
            <CategorySection />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
