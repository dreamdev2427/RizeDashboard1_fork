import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContactUs from "./screens/contact";
import Drawer from "./Component/rizedrwaer";
import Header from "./Component/rizeheader";
import Discount from "./Component/discounts";
import Blog from "./Component/blog";
import Games from "./Component/games";
import Nft from "./Component/rizeNfts";
import Service from "./Component/services";
import RizeBanner from "./Component/rizebanner";
import Banner from "./Component/escrowbanner";
import BlogView1 from "./screens/BlogView";
import Escrow from "./screens/escrow";
import RoadMap from "./screens/roadmap";
import Blogpage from "./screens/Blogpage";
import RizeSwiper from "./Component/RizeSwiper";
import RizeStake from "./screens/RizeStake";
import Wallet from "./Component/wallet"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="rize-stake-and-learn" element={<RizeStake />} />
        <Route path="escrow" element={<Escrow />} />
        <Route path="blog" element={<Blogpage />} />
        <Route path="blog-view/1" element={<BlogView1 />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="roadmap" element={<RoadMap />} />
        <Route path="wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
