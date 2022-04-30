import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const HomePageNavCards = () => {
  const { Meta } = Card;

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Link
            to="/watches"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1619134778706-7015533a6150?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              }
            >
              <Meta title="Shop watches" />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            to="/bracelets"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://media.istockphoto.com/photos/hand-of-unknown-young-female-in-a-shiny-silver-or-platinum-bracelet-picture-id1282680312?b=1&k=20&m=1282680312&s=170667a&w=0&h=I9tQ_udlIAa4TGigTlzvqjjvZWkgvcQyPDo_wteW-Uk="
                />
              }
            >
              <Meta title="Shop bracelets" />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            to="/sunglasses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://media.istockphoto.com/photos/surprised-baby-girl-wearing-heart-shaped-glasses-picture-id1294927798?b=1&k=20&m=1294927798&s=170667a&w=0&h=H-XFJdCW3qOTs7FkaL9RZXOOVcoh7GEN_A7lG17Q4-U="
                />
              }
            >
              <Meta title="Shop sunglasses" />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            to="/perfume"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://media.istockphoto.com/photos/womens-pink-perfume-in-beautiful-bottle-and-artificialt-flowers-on-picture-id935440038?b=1&k=20&m=935440038&s=170667a&w=0&h=oreOZq-HvrixrJ9eGn8885vxQr0BRzI7f5FP4DTNm44="
                />
              }
            >
              <Meta title="Shop perfume" />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default HomePageNavCards;
