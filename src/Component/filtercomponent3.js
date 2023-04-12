import MultiRangeSlider from "./multirangeslider";
import React, { useEffect, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

function Filter3() {
  const [priceMin, setPriceMin] = useState(1000);
  const [priceMax, setPriceMax] = useState(10000);
  const [inputFlab, setinputFlag] = useState(false);

  const handlePriceMinChange = (event) => {
    console.warn(parseInt(event.target.value));
    setinputFlag(true);
    setPriceMin(parseInt(event.target.value));
  };

  const handlePriceMaxChange = (event) => {
    setinputFlag(true);
    setPriceMax(parseInt(event.target.value));
  };

  return (
    <div className="rize-nav-item-network">
      <a
        className="rize-nav-item rize-imp-link "
        style={{ padding: "0px 15px" }}
      >
        Price Range
      </a>
      <div className="rize-dropdown radio--slider--menu d-flex ">
        <div className="slider-manage">
          <div className="range-slider-name w-100">
            <p
              className="pb-2 pt-2 d-flex pl-3 w-100 "
              style={{ alignItems: "flex-start", marginLeft: 20 }}
            >
              Range
            </p>
          </div>
          <div className="pb-2 range-slider-name">
            <p
              className="pb-2 pl-3 w-100"
              style={{
                color: "#33ff00",
                alignItems: "flex-start",
                marginLeft: 20,
              }}
            >
              {`${priceMin ? priceMin.toLocaleString() : 0}$ - ${
                priceMax ? priceMax.toLocaleString() : 0
              }$`}
            </p>

            <MultiRangeSlider
              min={1000}
              max={100000}
              onChange={({ min, max }) => {
                if (!inputFlab) {
                  setPriceMin(min);
                  setPriceMax(max);
                  console.log(`min = ${min}, max = ${max}`);
                }
              }}
            />

            <div className="range--slider--input pt-4">
              <input
                onBlur={() => {
                  setinputFlag(false);
                }}
                min={1000}
                max={100000}
                type="text"
                name="price-min"
                onChange={(e) => handlePriceMinChange(e)}
                placeholder="Min Price"
              />
              <input
                min={1000}
                max={100000}
                type="text"
                name="price-max"
                onChange={(e) => handlePriceMaxChange(e)}
                placeholder="Max Price"
              />
            </div>
          </div>
          <div className="pt-3 mt-2  w-100 range--slider--button">
            <button
              style={{
                marginBottom: 15,
                background: "transparent",
                color: "white",
                minWidth: 80,
                border: "1px solid #33ff00",
                boxShadow: "none",
              }}
              className="btn rize-btn-netowrk-green v-center h-center "
            >
              <span style={{ height: 14 }}>Cancel</span>
            </button>
            <button
              style={{ marginBottom: 15, minWidth: 80 }}
              className="btn rize-btn-netowrk-green v-center h-center "
            >
              <span style={{ height: 14 }}>Apply</span>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Filter3;
