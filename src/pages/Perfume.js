import React from "react";
import axios from "axios";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { AppContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

const Perfume = () => {
  const { cart, customSetCart } = React.useContext(AppContext);
  const [products, setProducts] = React.useState([]);
  const [brandFilter, setBrandFilter] = React.useState();
  const [priceFilter, setPriceFilter] = React.useState([0, 6000]);
  const [sortBy, setSortBy] = React.useState("Ascending");

  function filterProducts(productsList = []) {
    const productsFilteredByBrand = !brandFilter
      ? productsList
      : productsList.filter((product) => product.name.includes(brandFilter));
    const productsFilteredByPrice = !priceFilter
      ? productsFilteredByBrand
      : productsFilteredByBrand.filter(
          (product) =>
            product.price >= priceFilter[0] && product.price <= priceFilter[1]
        );

    return sortBy !== "Ascending"
      ? productsFilteredByPrice.sort((a, b) => b.price - a.price)
      : productsFilteredByPrice.sort((a, b) => a.price - b.price);
  }

  function handleBrandChange(value) {
    setBrandFilter(value);
  }
  function handlePriceChange(value) {
    setPriceFilter(value);
  }
  function handleSortByChange(value) {
    setSortBy(value);
  }

  React.useEffect(() => {
    const handleGetProducts = async () => {
      try {
        const result = await axios.get("http://localhost:5000/product/all", {
          params: {
            type: "perfume",
          },
        });
        if (result && result.data) {
          setProducts(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetProducts().then(() => console.log("Products"));
  }, []);

  const handleAddProduct = (product) => {
    customSetCart([...cart, product]);
  };

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "57px",
        // height: "100%",
      }}
    >
      <div
        style={{
          width: "15%",
          height: "100vh",
          backgroundColor: "#FDFDFD",
        }}
      />
      <div style={{ width: "70%" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "#DF2F28",
              width: "100%",
              height: "350px",
            }}
          ></div>
          <img
            alt="idk"
            style={{
              width: "70%",
              height: "350px",
              objectFit: "contain",
            }}
            src="https://www.theperfumeshop.com/medias/sys_master/emporio-armani-media/emporio-armani-media/10671277506590/FullWidth.jpg"
          />
          <div
            style={{
              backgroundColor: "#D52923",
              width: "100%",
              height: "350px",
            }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <Filters
            brandOptions={[
              ...new Set(products.map((product) => product.name.split(" ")[0])),
            ]}
            brand={brandFilter}
            onBrandChange={handleBrandChange}
            maxPrice={120}
            priceStep={1}
            priceFilter={priceFilter}
            onPriceFilterChange={handlePriceChange}
            sortBy={sortBy}
            onSortByChange={handleSortByChange}
          />
          <div
            style={{
              width: "75%",
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(12rem,16rem))",
              gap: "2rem",
              // justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {products &&
              filterProducts(products).map((product) => (
                <div
                  className="card"
                  style={{
                    overflow: "hidden",
                    boxShadow: "0 2px 20px #e1e5ee",
                    borderRadius: "2px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // cursor: "pointer",
                    transition: "transform 200ms ease-in",
                    hover: "transform:scale(1.5)",
                  }}
                >
                  <div
                    className="card_body"
                    style={{
                      fontFamily: "Oxygen, sans-serif",
                      fontSize: "13px",
                      // margin: "2rem",
                      marginTop: "1rem",
                      marginLeft: "2rem",
                      marginRight: "2rem",
                    }}
                  >
                    <img
                      classname="card_img"
                      style={{
                        height: "12rem",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      src={
                        product.photo
                          ? product.photo
                          : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1570119347612"
                      }
                      alt="THIS ALT IS KINDA BS NGLASDASD"
                    />
                    <h2
                      className="card_title"
                      style={{
                        padding: "1rem",
                        fontSize: "20px",
                        margin: "auto",
                        textAlign: "center",
                      }}
                    >
                      {product.name}
                    </h2>
                    {/* <p
                      className="card_description"
                      style={{ padding: "0 1rem" }}
                    >
                      {product.description}
                    </p> */}
                    <p
                      className="card_price"
                      style={{
                        fontSize: "19px",
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                    >
                      {product.price} $
                    </p>
                  </div>
                  <div style={{ display: "flex", marginBottom: "5px" }}>
                    <button
                      className="card_button"
                      style={{
                        marginLeft: "30px",
                        marginBottom: "10px",
                        width: "50%",
                        height: " 40px",
                        padding: "0.5rem",
                        fontFamily: "inherit",
                        fontWeight: "normal",
                        fontSize: "1rem",
                        // margin: "1 rem",
                        border: "1px solid black",
                        background: "transparent",
                        color: "black",
                        borderRadius: "3px",
                        transition:
                          "backround 200ms ease-in, color 200ms ease-in",
                      }}
                    >
                      <Link
                        to={`/product/${product.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        View Product
                      </Link>
                    </button>
                    <button
                      className="card_button"
                      style={{
                        marginLeft: "15px",
                        marginBottom: "10px",
                        width: "20%",
                        height: " 40px",
                        padding: "0.5rem",
                        fontFamily: "inherit",
                        fontWeight: "normal",
                        fontSize: "1rem",
                        // margin: "1 rem",
                        border: "1px solid black",
                        background: "transparent",
                        color: "black",
                        borderRadius: "3px",
                        transition:
                          "backround 200ms ease-in, color 200ms ease-in",
                      }}
                      onClick={() => handleAddProduct(product)}
                    >
                      <ShoppingCartOutlined />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "15%",
          height: "100vh",
          backgroundColor: "#FDFDFD",
        }}
      ></div>
    </div>
  );
};

export default Perfume;
