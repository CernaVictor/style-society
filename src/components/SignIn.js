import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { AppContext } from "../context/AuthContext";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";

const SignIn = ({ hideModal }) => {
  const { setUser } = React.useContext(AppContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data: dbUser } = await axios.post(
        "http://localhost:5000/auth/login",
        {
          username,
          password,
        }
      );
      console.log(dbUser);
      setUser(dbUser);
      localStorage.setItem("user", JSON.stringify(dbUser));
      hideModal();
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div style={{ marginRight: 50 }}>
      <div style={{ marginLeft: 60 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            name="username"
            rules={[
              {
                required: true,
                // min: 0,
                // max: 25,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              allowClear
              maxLength={30}
              prefix={<UserOutlined />}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              allowClear
              maxLength={30}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
        </Form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          style={{ alignSelf: "flex-end", color: "black" }}
          onClick={handleSignIn}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
