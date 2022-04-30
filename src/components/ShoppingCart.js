import React from "react";
import { Badge, Modal, Button, Divider } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { AppContext } from "../context/AuthContext";

const ShoppingCart = () => {
  const { user } = React.useContext(AppContext);
  const { cart, customSetCart } = React.useContext(AppContext);
  const [isCartModalVisible, setIsCartModalVisible] = React.useState(false);

  const toggleModal = () => {
    console.log("triggered");
    setIsCartModalVisible((prevState) => !prevState);
  };

  const removeItemFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    customSetCart(newCart);
  };

  const total = cart.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );
  return (
    <>
      <div style={{ marginRight: 20, cursor: "pointer" }} onClick={toggleModal}>
        <Badge count={cart.length}>
          <ShoppingCartOutlined style={{ fontSize: 25 }} />
        </Badge>
      </div>
      <Modal
        visible={isCartModalVisible}
        onCancel={toggleModal}
        footer={null}
        width="400px"
        scroll={{ y: 240 }}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        bodyStyle={{ maxHeight: 600, overflow: "auto" }}
      >
        <div className="shopping-cart-wrapper" style={{}}>
          <div className="shopping-cart-title" style={{ textAlign: "center" }}>
            <img
              alt="idk"
              height="50px"
              width="70px"
              src="http://cdn.shopify.com/s/files/1/2694/8908/files/logo_3x_copy_c344509a-78fb-465f-a656-8129ba098cc1_1200x1200.png?v=1613172452"
            />
            <span style={{ fontFamily: "cursive" }}> x </span>
            <span style={{ fontWeight: "bold", fontFamily: "cursive" }}>
              {user.firstname}
            </span>
            {/* <Divider /> */}
          </div>
          <div className="shopping-cart-items" style={{ marginTop: "30px" }}>
            {cart.map((product, index) => {
              return (
                <div className="with-divider" style={{}}>
                  <div className="img-to-button" style={{ display: "flex" }}>
                    <div
                      style={{
                        // display: "flex",
                        // justifyContent: "flex-end",
                        width: "80%",
                      }}
                    >
                      <img
                        className="product_img"
                        style={{
                          height: "3rem",
                          width: "40%",
                          objectFit: "contain",
                        }}
                        src={
                          product.photo
                            ? product.photo
                            : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1570119347612"
                        }
                        alt="IDK I JUST NEED AN ALT"
                      />
                      <span style={{ marginLeft: "10px" }}>{product.name}</span>
                    </div>
                    <div style={{ display: "flex", width: "20%" }}>
                      <span
                        style={{ marginTop: "12.5px", justifyItems: "right" }}
                      >
                        {product.price} $
                      </span>
                    </div>
                    <div style={{ display: "flex", width: "20%" }}>
                      {/* <span style={{ justifyItems: "right" }}>
                        {product.price}
                      </span> */}
                      <Button
                        style={{ marginLeft: 20, marginTop: "5px" }}
                        onClick={() => removeItemFromCart(index)}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                  <Divider />
                </div>
              );
            })}
          </div>
          <div className="shopping-cart-total" style={{ display: "flex" }}>
            <div
              style={{ marginLeft: "20px", marginTop: "10px", width: "80%" }}
            >
              <span style={{ fontWeight: "bold" }}>Sub-total : </span>
              <span>{total} $</span>
            </div>
            <div></div>
            <div style={{ marginRight: "20px" }}>
              <Button type="primary" size="large" danger style={{}}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShoppingCart;
