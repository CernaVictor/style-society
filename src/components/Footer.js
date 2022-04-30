import {
  FacebookFilled,
  YoutubeFilled,
  LineOutlined,
  PhoneOutlined,
  MailOutlined,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#34363A",
        height: 50,
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        allignItems: "center",
        position: "sticky",
        bottom: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FacebookFilled
          style={{
            color: "white",
            margin: "auto",
            fontSize: 20,
            marginLeft: 200,
            marginTop: -5,
          }}
          type="icon-facebook"
        />
        <TwitterCircleFilled
          style={{ color: "white", fontSize: 20, marginLeft: 10 }}
          type="icon-twitter"
        />
        <InstagramFilled
          style={{ color: "white", fontSize: 22, marginLeft: 10 }}
          type="icon-instagram"
          size
        />
        <YoutubeFilled
          style={{ color: "white", fontSize: 22, marginLeft: 10 }}
          type="icon-instagram"
          size
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LineOutlined
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 25,
            marginLeft: 35,
          }}
          rotate={90}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <PhoneOutlined
          style={{ color: "white", alignSelf: "center", fontSize: 20 }}
        />
        <p
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 20,
            marginTop: 13,
            marginLeft: 10,
          }}
        >
          0256 367 899
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LineOutlined
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 25,
          }}
          rotate={90}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginRight: 120 }}>
        <MailOutlined
          style={{ color: "white", alignSelf: "center", fontSize: 20 }}
        />
        <p
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 20,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          stylesociety@info.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
