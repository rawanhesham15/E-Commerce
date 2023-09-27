import React from "react";
import NavBar from "../components/NavBar";
import Announcements from "../components/Announcements";

function Home(){
    return(
        <div>
            <Announcements />
            <NavBar />
        </div>
    )
}

export default Home;