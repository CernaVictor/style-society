import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { AppContext } from "../context/AuthContext";
import {
  LockOutlined,
  UserOutlined,
  IdcardOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Register = ({ hideModal }) => {
  const { setUser } = React.useContext(AppContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data: dbUser } = await axios.post(
        "http://localhost:5000/auth/register",
        {
          username,
          password,
          confirmPassword,
          firstname,
          lastname,
          email,
        }
      );
      setUser(dbUser);
      hideModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginRight: 50 }}>
      <div>
        <div style={{ marginLeft: 60 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onSubmit={handleRegister}
            autoComplete="off"
          >
            <Form.Item
              // label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  // max: 20,
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
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                allowClear
                maxLength={30}
                prefix={<LockOutlined />}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              // label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                allowClear
                maxLength={30}
                prefix={<LockOutlined />}
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              // label="Firstname"
              name="firstname"
              rules={[
                { required: true, message: "Please input your firstname!" },
              ]}
            >
              <Input
                allowClear
                maxLength={30}
                prefix={<IdcardOutlined />}
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              // label="Lastname"
              name="lastname"
              rules={[
                { required: true, message: "Please input your lastname!" },
              ]}
            >
              <Input
                allowClear
                maxLength={30}
                prefix={<IdcardOutlined />}
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              // label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                allowClear
                maxLength={30}
                prefix={<MailOutlined />}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          style={{ alignSelf: "flex-end", color: "black" }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
