import React from "react";
import NavBar from "../components/NavBar";
import Announcements from "../components/Announcements";
import  Slider  from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home(){
    return(
        <div>
            <Announcements />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home;