import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Divider } from "antd";
import { AppContext } from "../context/AuthContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);
  const { cart, customSetCart } = React.useContext(AppContext);

  React.useEffect(() => {
    const handleGetProduct = async () => {
      console.log(id);
      try {
        const result = await axios.get(`http://localhost:5000/product/${id}`);

        if (result && result.data) {
          setProduct(result.data);
          console.log(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleGetProduct().then(() => console.log("Product"));
  }, [id]);

  const handleAddProduct = (newProduct) => {
    customSetCart([...cart, newProduct]);
  };

  return (
    <div style={{ padding: 150 }}>
      <div
        style={{
          // marginTop: "150px",
          // paddingTop: "150px",
          // marginLeft: "150px",
          // marginRight: "150px",
          height: "600px",
          border: "solid",
          // borderColor: "#F6FAFF",
          borderWidth: "thin",
          display: "flex",
        }}
      >
        <div style={{ marginTop: "120px", marginLeft: "150px" }}>
          <img
            style={{ height: "20rem", objectFit: "contain" }}
            src={product.photo}
            alt="we dont really care about alts"
          />
        </div>
        <div style={{ marginTop: "150px", marginLeft: "100px" }}>
          <div style={{ marginRight: "20px" }}>
            <div>
              <text style={{ fontSize: "25px" }}>{product.name}</text>
            </div>
            <div style={{ marginTop: "10px" }}>
              <text style={{ fontSize: "17px" }}>{product.price}$</text>
            </div>
            <Divider />
          </div>
          <div style={{ marginRight: "20px" }}>{product.description}</div>
          <div style={{ marginTop: "50px" }}>
            <Button size="large" onClick={() => handleAddProduct(product)}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
