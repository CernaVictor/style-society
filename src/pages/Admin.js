import React from "react";
import axios from "axios";
import { Tabs } from "antd";
import { Table, Button, Modal } from "antd";
import EditProduct from "../components/EditProduct";
import CreateProduct from "../components/CreateProduct";

const { TabPane } = Tabs;

const Admin = () => {
  const [visible, setVisible] = React.useState(false);
  const [visiblecreate, setVisibleCreate] = React.useState(false);

  const [products, setProducts] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const [users, setUsers] = React.useState([]);

  function callback(key) {
    console.log(key);
  }

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };

  const showModalCreate = () => {
    setVisibleCreate(true);
  };

  const hideModal = () => {
    setVisible(false);
    setVisibleCreate(false);
    setSelectedProduct(null);
  };

  const hideModalCreate = () => {
    setVisibleCreate(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const handleCancelCreate = () => {
    console.log("Clicked cancel button");
    setVisibleCreate(false);
  };

  React.useEffect(() => {
    const handleGetProducts = async () => {
      try {
        const result = await axios.get("http://localhost:5000/product/all");
        if (result && result.data) {
          setProducts(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetProducts().then(() => console.log("Products"));
  }, []);

  React.useEffect(() => {
    const handleGetUsers = async () => {
      try {
        const result = await axios.get("http://localhost:5000/user/all");
        if (result && result.data) {
          setUsers(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetUsers().then(() => console.log("Users"));
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/delete/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/delete/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (e) {
      console.log(e);
    }
  };

  const userColumns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "delete",
    },
  ];

  const userData = users.map((user, index) => ({
    key: index,
    username: `${user.username}`,
    firstname: `${user.firstname}`,
    lastname: `${user.lastname}`,
    email: `${user.email}`,
    delete: <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>,
  }));

  const productColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Description",
      colSpan: 1,
      dataIndex: "description",
      key: "description",
      width: 700,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "delete",
    },
  ];

  const onSuccesfullCreateProduct = (product) => {
    setProducts((prevState) => [product].concat(prevState));
  };

  const onSuccesfullEditProduct = (product) => {
    setProducts((prevState) =>
      prevState.map((prod) => (prod.id === product.id ? product : prod))
    );
  };

  const mappedData = products.map((product, index) => ({
    key: index,
    name: `${product.name}`,
    description: `${product.description}`,
    price: `${product.price}`,
    type: `${product.type}`,
    quantity: `${product.quantity}`,
    delete: (
      <>
        <Button onClick={() => handleOpenModal(product)}>Edit</Button>
        <Button
          style={{ marginLeft: "5px" }}
          onClick={() => handleDeleteProduct(product.id)}
        >
          Delete
        </Button>
      </>
    ),
  }));

  const addButtonRow = {
    key: "werandom",
    name: (
      <>
        <Button onClick={showModalCreate}>Add new product</Button>
        <Modal
          mask={false}
          width="700px"
          visible={visiblecreate}
          onCancel={handleCancelCreate}
          footer={null}
        >
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Create new product" key="1">
              <CreateProduct
                hideModalCreate={hideModalCreate}
                onSuccesfullCreateProduct={onSuccesfullCreateProduct}
              />
            </TabPane>
          </Tabs>
        </Modal>
      </>
    ),
    description: "",
    price: "",
    type: "",
    quantity: "",
  };

  const productData = [addButtonRow].concat(mappedData);

  return (
    <div>
      <div style={{ display: "flex", paddingTop: "60px", height: "100%" }}>
        <div
          style={{
            width: "15%",
            height: "100vh",
            backgroundColor: "#FDFDFD",
          }}
        ></div>
        <div style={{ width: "70%" }}>
          <Tabs defaultActiveKey="1" centered tabBarGutter="40px">
            <TabPane tab="Users" key="1">
              <Table columns={userColumns} dataSource={userData} />
            </TabPane>
            <TabPane tab="Products" key="2">
              <Table columns={productColumns} dataSource={productData} />
              <Modal
                mask={false}
                width="700px"
                visible={visible}
                // centered
                destroyOnClose={true}
                onCancel={handleCancel}
                footer={null}
              >
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Edit" key="1">
                    <EditProduct
                      hideModal={hideModal}
                      product={selectedProduct}
                      onSuccesfullEditProduct={onSuccesfullEditProduct}
                    />
                  </TabPane>
                </Tabs>
              </Modal>
            </TabPane>
          </Tabs>
        </div>
        <div
          style={{
            width: "15%",
            height: "100vh",
            backgroundColor: "#FDFDFD",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Admin;
