import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.config"
import { doc, deleteDoc } from "firebase/firestore"

import {toast} from "react-toastify"
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async() => {
      const res = await axios.get("https://json-cay-canh-ntv9jklzz-vanhoa2k2.vercel.app/json_CayCanh")
      setProducts(res.data)
      setLoading(false)
    }
    fetchApi()
  },[])

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db,'products', id))
    toast.success('Deleted!')
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Ảnh</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Danh Mục</th>
                  <th>Giá</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h4 className="py-5 text-center fw-bold">Loading.......</h4>
                ) : (
                  products.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.productImg[0].imgUrl} alt="" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.category}</td>
                      <td>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                      <td>
                        <button onClick={() => {deleteProduct(item.id)}} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
