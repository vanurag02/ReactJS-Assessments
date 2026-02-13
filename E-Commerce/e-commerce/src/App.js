import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./ProductCard";

import products from "./products";

function App() {
  return (
    <>
      <h1 className="text-center shadow text-primary p-3">E-Commerce</h1>
      <div className="container mt-5">
        <div className="row mb-5">
          {products.map((val) => {
            return (
              <>
                <ProductCard
                  imgsrc={val.image}
                  productname={val.name}
                  price={val.price}
                  rating={val.rating}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
