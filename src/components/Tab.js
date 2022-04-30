import React from "react";
import { Tabs } from "antd";
import SignIn from "./SignIn";
import Register from "./Register";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Tab = ({ hideModal }) => {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Sign in" key="1">
          <SignIn hideModal={hideModal} />
        </TabPane>
        <TabPane tab="Register" key="2">
          <Register hideModal={hideModal} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Tab;
