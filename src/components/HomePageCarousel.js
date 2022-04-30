import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const HomePageCarousel = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  return (
    <div
      style={{
        width: "100%",
        // height: "100%",
        // backgroundColor: "black",
        alignSelf: "center",
        // marginTop: 100,
        // marginBottom: 100,
        // backgroundColor: "#F2F9FF",
        backgroundColor: "#EAF3FF",
      }}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        stopOnHover
        renderArrowPrev={(goBack) => (
          <div
            style={{
              ...arrowStyles,
              left: 15,
              width: 30,
              height: 30,
              borderRadius: 20,
              backgroundColor: "black",
              opacity: 0.2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LeftOutlined style={{ color: "white" }} onClick={goBack} />
          </div>
        )}
        renderArrowNext={(goForward) => (
          <div
            style={{
              ...arrowStyles,
              right: 15,
              width: 30,
              height: 30,
              borderRadius: 20,
              backgroundColor: "black",
              opacity: 0.2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RightOutlined style={{ color: "white" }} onClick={goForward} />
          </div>
        )}
      >
        <div>
          <img
            alt="idk"
            style={{
              objectFit: "contain",
              height: 500,
            }}
            src="https://images.unsplash.com/photo-1507680576301-98c2029cf434?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <img
            alt="idk"
            style={{
              objectFit: "contain",
              height: 500,
            }}
            src="https://media.istockphoto.com/photos/gold-bracelet-picture-id1127586499?b=1&k=20&m=1127586499&s=170667a&w=0&h=EGhZlmLiTBcXF5zENQ3VzFl69D_nluU1oaM-9rNl7Wc="
          />
        </div>
        <div>
          <img
            alt="idk"
            style={{
              objectFit: "contain",
              height: 500,
            }}
            src="https://media.istockphoto.com/photos/glass-perfume-bottle-with-green-and-yellow-leaves-picture-id1219428163?b=1&k=20&m=1219428163&s=170667a&w=0&h=_CIytAdT3V-ymEttIsxy7nwA7wQA81PtOUof_AkghXE="
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
