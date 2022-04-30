import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";

const EditProduct = ({ hideModal, product, onSuccesfullEditProduct }) => {
  const [name, setName] = React.useState(product.name);
  const [description, setDescription] = React.useState(product.description);
  const [price, setPrice] = React.useState(product.price);
  const [quantity, setQuantity] = React.useState(product.quantity);

  const handleEditProduct = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/product/edit/${product.id}`,
        {
          name,
          description,
          price,
          quantity,
        }
      );
      onSuccesfullEditProduct(res.data);
      hideModal();
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div style={{ marginRight: 50 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input a name!" }]}
        >
          <Input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input a description!" }]}
        >
          {/* <Input
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          /> */}
          <Input.TextArea
            defaultValue={description}
            showCount
            maxLength={300}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input a price!" }]}
        >
          <Input
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please input a description!" }]}
        >
          <Input
            defaultValue={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Item>
      </Form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          style={{ alignSelf: "flex-end", color: "black" }}
          onClick={handleEditProduct}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
