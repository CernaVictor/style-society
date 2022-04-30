import React from "react";
import { Modal, Button } from "antd";
import Tab from "./Tab";
import { AppContext } from "../context/AuthContext";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const SignUpModal = () => {
  const { user, setUser } = React.useContext(AppContext);
  const [visible, setVisible] = React.useState(false);
  const history = useHistory();

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const LogoutUser = () => {
    setUser(null);
    localStorage.clear();
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="3" onClick={LogoutUser}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {user ? (
        <>
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <Button
              style={{
                backgroundColor: "#F6FAFF",
                borderColor: "#8C8C8C",
                color: "#8C8C8C",
                borderRadius: "15px",
              }}
              // shape="round"
              type="primary"
            >
              Hello, {user.firstname}! <DownOutlined />
            </Button>
          </Dropdown>
        </>
      ) : (
        <>
          <Button
            style={{
              backgroundColor: "#F6FAFF",
              borderColor: "#8C8C8C",
              color: "#8C8C8C",
            }}
            shape="round"
            type="primary"
            onClick={showModal}
          >
            Sign in
          </Button>
          <Modal
            visible={visible}
            onCancel={handleCancel}
            footer={null}
            // width={00}
          >
            <Tab hideModal={hideModal} />
          </Modal>{" "}
        </>
      )}
    </>
  );
};

export default SignUpModal;
