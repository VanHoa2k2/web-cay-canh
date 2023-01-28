import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import '../styles/dashboard.css'

import useGetData from "../custom-hooks/useGetData";
import axios from 'axios';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async() => {
      const res = await axios.get("https://json-cay-canh-ntv9jklzz-vanhoa2k2.vercel.app/json_CayCanh")
      setProducts(res.data)
    }
    fetchApi()
  },[])
  const {data: users} = useGetData('users');

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className='lg-3'>
              <div className='revenue__box'>
                <h5>Tổng Doanh Thu</h5>
                <span>$7890</span>
              </div>
            </Col>
            <Col className='lg-3'>
                <div className='order__box'>
                  <h5>Đơn Đặt Hàng</h5>
                  <span>789</span>
                </div>
            </Col>
            <Col className='lg-3'>
            <div className='products__box'>
                  <h5>Sản Phẩm</h5>
                  <span>{products.length}</span>
                </div>
            </Col>
            <Col className='lg-3'>
            <div className='users__box'>
                  <h5>Tổng Người Dùng</h5>
                  <span>{users.length}</span>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard