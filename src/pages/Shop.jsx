import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import ReactLoading from 'react-loading';
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import "../styles/shop.css";
import axios from "axios";

const Shop = () => {
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

  const [productsData, setProductsData] = useState(products);
  const location = useLocation();
  const valueLocation = location.state;
  const valueHome = valueLocation && valueLocation.valueCategory

  // chon danh muc
  const handleFilter = (value) => {
    const filterValue = value;

    if (filterValue === "all") {
      setProductsData(products);
    }

    if (filterValue === "de-ban") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cây cảnh để bàn"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "thuy-sinh") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cây cảnh thủy sinh"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "sen-da-xuong-rong") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sen đá, xương rồng"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "noi-that") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cây cảnh nội thất"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "bonsai") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cây bonsai"
      );
      setProductsData(filteredProducts);
    }

    // sortRef.current.value = "all";
  };

  useEffect(() => {
    handleFilter(valueHome)
  },[products])

  // tim kiem tang dan / giam dan
  const sortProducts = (value) => {
    const selectSort = value;

    const productsCopy = [...productsData]
    if(productsCopy.length > 0) {
      productsCopy.sort((priceA, priceB) => {
        if (selectSort === "all") {
          return priceA.id - priceB.id;
        }
  
        if (selectSort === "ascending") {
          return priceA.price - priceB.price;
        }
  
        if (selectSort === "descending") {
          return priceB.price - priceA.price;
        }
      })
      setProductsData(productsCopy);

    } else {
      const productsCopyDefault = [...products]

      productsCopyDefault.sort((priceA, priceB) => {
        if (selectSort === "all") {
          return priceA.id - priceB.id;
        }
  
        if (selectSort === "ascending") {
          return priceA.price - priceB.price;
        }
  
        if (selectSort === "descending") {
          return priceB.price - priceA.price;
        }
      })
      setProductsData(productsCopyDefault);
    }
  };

  // Chức năng ô tìm kiềm
  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Cửa Hàng">
      <CommonSection title="Cửa Hàng Cây Cảnh" />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="6"className="mt-4">
              <Row>
                <Col xs="6" lg="12" className="filter__widget">
                  <ul>
                    <h6>Danh Mục</h6>
                    <li onClick={() => handleFilter("all")}><i className="ri-plant-line"></i>Tất Cả Cây Cảnh</li>
                    <li onClick={() => handleFilter("thuy-sinh")}><i className="ri-plant-line"></i>Cây cảnh thủy sinh</li>
                    <li onClick={() => handleFilter("de-ban")}><i className="ri-plant-line"></i>Cây Cảnh Để Bàn</li>
                    <li onClick={() => handleFilter("sen-da-xuong-rong")}><i className="ri-plant-line"></i>Sen đá, xương rồng</li>
                    <li onClick={() => handleFilter("noi-that")}><i className="ri-plant-line"></i>Cây cảnh nội thất</li>
                    <li onClick={() => handleFilter("bonsai")}><i className="ri-plant-line"></i>Cây bonsai</li>
                  </ul>
                </Col>
                <Col xs="6" lg="12" className="filter__widget">
                  <ul>
                    <h6>Giá tiền</h6>
                    <li onClick={() => sortProducts("ascending")}>Tăng dần</li>
                    <li onClick={() => sortProducts("descending")}>Giảm dần</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg="10" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Tìm Kiếm......"
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <section className="pt-0">
                <Container>
                  <Row>
                    {productsData.length === 0 ? (
                      loading ? (
                        <ReactLoading className="loading__react mt-4" type={"spin"} color={'#1d6233'} height={110} width={110}/>
                      ) : (
                        <ProductsList data={products} />

                      )
                    ) : loading ? (
                        <ReactLoading className="loading__react mt-4" type={"spin"} color={'#1d6233'} height={110} width={110} />
                    ) : (
                      <ProductsList data={productsData} />
                    )}
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
