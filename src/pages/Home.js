import React from "react";
import NavBar from "../components/NavBar";
import Announcements from "../components/Announcements";
import  Slider  from "../components/Slider";
import Categories from "../components/Categories";

function Home(){
    return(
        <div>
            <Announcements />
            <NavBar />
            <Slider />
            <Categories />

        </div>
    )
}

export default Home;