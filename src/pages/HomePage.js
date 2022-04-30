import HomePageCarousel from "./../components/HomePageCarousel";
import HomePageNavCards from "./../components/HomePageNavCards";
import HomePageNews from "./../components/HomePageNews";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        marginTop: 65,
        // backgroundColor: "red",
      }}
    >
      <HomePageCarousel />
      <div
        style={{
          height: 400,
          marginTop: 30,
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        <HomePageNavCards />
      </div>
      <HomePageNews />
    </div>
  );
};

export default HomePage;
