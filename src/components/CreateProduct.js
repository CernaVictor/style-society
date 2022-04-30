import React from "react";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const { Option } = Select;

const CreateProduct = ({ hideModalCreate, onSuccesfullCreateProduct }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [type, setType] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [file, setFile] = React.useState(null);

  function handleChange(value) {
    setType(value);
  }

  const onDrop = React.useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("type", type);
      formData.append("quantity", quantity);

      const { data: newProduct } = await axios.post(
        "http://localhost:5000/product/create",
        formData
      );
      onSuccesfullCreateProduct(newProduct);
      hideModalCreate();
      setName("");
      setDescription("");
      setPrice("");
      setType("");
      setQuantity("");
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{}}>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          labelAlign="left"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input a name!" }]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input a description!" }]}
        >
          <Input.TextArea
            showCount
            maxLength={300}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /> */}
        </Form.Item>

        <Form.Item
          labelAlign="left"
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input a price!",
            },
          ]}
        >
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          label="Type"
          name="type"
          hasFeedback
          rules={[{ required: true, message: "Please input a type!" }]}
        >
          <Select
            allowClear
            placeholder="Select product type"
            value={type}
            onChange={handleChange}
          >
            <Option value="watches">Watches</Option>
            <Option value="perfume">Perfume</Option>
            <Option value="sunglasses">Sunglasses</Option>
            <Option value="bracelets">Bracelets</Option>
          </Select>
          {/* <Input  /> */}
        </Form.Item>

        <Form.Item
          labelAlign="left"
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please input a description!" }]}
        >
          <Input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Item>
      </Form>
      <div
        {...getRootProps()}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input {...getInputProps()} />
        {file ? (
          <>
            {file.name}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
              style={{ position: "relative ", marginLeft: "5px" }}
              size="small"
            >
              x
            </Button>
          </>
        ) : (
          <Button>Cick here to add a photo!</Button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          style={{ alignSelf: "flex-end", color: "black", marginTop: 10 }}
          onClick={handleCreateProduct}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default CreateProduct;
