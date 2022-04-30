import React from "react";

const HomePageNews = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ alignSelf: "center" }}>
        <p>From the world of style</p>
      </h2>
      <div style={{ margin: "auto" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
          }}
        >
          <li>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                onClick={() =>
                  window.open(
                    "https://www.elle.ro/fashion/cele-mai-hot-forme-de-ochelari-de-soare-pentru-vara-aceasta-728573"
                  )
                }
              >
                <img
                  style={{
                    width: 300,
                    height: 200,
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  src="https://images.unsplash.com/photo-1556306535-38febf6782e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJheSUyMGJhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="forme ochelari"
                />
              </p>
              <h3
                style={{
                  cursor: "pointer",
                  alignSelf: "center",
                  textAlign: "center",
                  lineHeight: "50%",
                  // fontFamily: "Titillium Web",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    textDecoration: "none",
                    color: "black",
                    // textAlign: "cente",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.elle.ro/fashion/cele-mai-hot-forme-de-ochelari-de-soare-pentru-vara-aceasta-728573"
                    )
                  }
                >
                  Cele mai hot forme de ochelari <br></br> de soare pentru vara
                  aceasta
                </p>
              </h3>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                onClick={() =>
                  window.open(
                    "https://foxi.ro/articol/ceasuri-smartwatch-pentru-barbati"
                  )
                }
              >
                <img
                  style={{
                    width: 300,
                    height: 200,
                    objectFit: "contain",
                    marginLeft: 30,
                    marginRight: 30,
                    cursor: "pointer",
                  }}
                  src="https://foxi.ro/upload/articles/235/big-ceasuri-smartwatch-pentru-barbati.jpg"
                  alt="smartwatch"
                />
              </p>
              <h3 style={{ alignSelf: "center", cursor: "pointer" }}>
                <p
                  style={{
                    fontSize: 15,
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={() =>
                    window.open(
                      "https://foxi.ro/articol/ceasuri-smartwatch-pentru-barbati"
                    )
                  }
                >
                  Ceasuri smartwatch pentru barbati 2021
                </p>
              </h3>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                onClick={() =>
                  window.open(
                    "https://www.vogue.com/article/best-perfumes-for-women"
                  )
                }
              >
                <img
                  style={{
                    width: 300,
                    height: 200,
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  src="https://images.unsplash.com/photo-1608228088998-57828365d486?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dm9ndWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="vogue"
                />
              </p>
              <h3
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  lineHeight: "60%",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.vogue.com/article/best-perfumes-for-women"
                    )
                  }
                >
                  The Best Perfumes for Women <br></br> come With a Story
                </p>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePageNews;
