import React, { Component } from "react";
import { allProducts, phones, shoes, watches, clothes } from "./products";

import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      showProducts: true,
      showPhones: false,
      showShoes: false,
      showWatches: false,
      showClothes: false,
    };
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <section className="section-home my-5">
          <div className="container">
            <div className="btn-group">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    this.setState({
                      showProducts: true,
                      showPhones: false,
                      showShoes: false,
                      showWatches: false,
                      showClothes: false,
                    });
                  }}
                >
                  All Products
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    this.setState({
                      showProducts: false,
                      showPhones: true,
                      showShoes: false,
                      showWatches: false,
                      showClothes: false,
                    });
                  }}
                >
                  Mobiles
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    this.setState({
                      showProducts: false,
                      showPhones: false,
                      showShoes: true,
                      showWatches: false,
                      showClothes: false,
                    });
                  }}
                >
                  Shoes
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    this.setState({
                      showProducts: false,
                      showPhones: false,
                      showShoes: false,
                      showWatches: true,
                      showClothes: false,
                    });
                  }}
                >
                  Watches
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    this.setState({
                      showProducts: false,
                      showPhones: false,
                      showShoes: false,
                      showWatches: false,
                      showClothes: true,
                    });
                  }}
                >
                  Clothes
                </button>
              </div>
            </div>
            <div className="row">
              {/* {allProducts.map((val) => {
                return (
                  <>
                    <ProductCard
                      pName={val.name}
                      pPrice={val.price}
                      pRating={val.rating}
                      pImage={val.imagePath}
                    />
                  </>
                );
              })} */}
              {this.state.showProducts === true ? allProducts.map((val) => {
                return(
                  <>
                  <ProductCard pName={val.name}
                      pPrice={val.price}
                      pRating={val.rating}
                      pImage={val.imagePath}/>
                  </>
                );
              })
              :this.state.showPhones === true?phones.map((val)):}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;
