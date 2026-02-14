import React, { Component } from "react";
import { allProducts, phones, shoes, watches, clothes } from "./products";

import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "all",
    };
  }

  render() {
    let productsToShow;

    if (this.state.activeCategory === "all") {
      productsToShow = allProducts;
    } else if (this.state.activeCategory === "phones") {
      productsToShow = phones;
    } else if (this.state.activeCategory === "shoes") {
      productsToShow = shoes;
    } else if (this.state.activeCategory === "watches") {
      productsToShow = watches;
    } else if (this.state.activeCategory === "clothes") {
      productsToShow = clothes;
    }

    return (
      <>
        <Navbar />
        <h1 className="text-center mt-5">Most View Products</h1>
        <section className="section-home my-5">
          <div className="container">
            {/* Buttons */}
            <div className="btn-group mb-4" role="group">
              <button
                type="button"
                className={
                  this.state.activeCategory === "all"
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
                onClick={() => this.setState({ activeCategory: "all" })}
              >
                All Products
              </button>

              <button
                type="button"
                className={
                  this.state.activeCategory === "phones"
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
                onClick={() => this.setState({ activeCategory: "phones" })}
              >
                Mobiles
              </button>

              <button
                type="button"
                className={
                  this.state.activeCategory === "shoes"
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
                onClick={() => this.setState({ activeCategory: "shoes" })}
              >
                Shoes
              </button>

              <button
                type="button"
                className={
                  this.state.activeCategory === "watches"
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
                onClick={() => this.setState({ activeCategory: "watches" })}
              >
                Watches
              </button>

              <button
                type="button"
                className={
                  this.state.activeCategory === "clothes"
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
                onClick={() => this.setState({ activeCategory: "clothes" })}
              >
                Clothes
              </button>
            </div>

            {/* Product Grid */}
            <div className="row">
              {productsToShow.map((val) => (
                <ProductCard
                  key={val.id}
                  pName={val.name}
                  pPrice={val.price}
                  pRating={val.rating}
                  pImage={val.image}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;
