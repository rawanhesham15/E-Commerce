import React from 'react'
import './NavBarStyle.css'
import {Badge } from '@material-ui/core';
// import {Search , ShoppingCartOutlined} from '@material-ui/core';

function NavBar(){
    // const {Badge} = require("@material-ui/core")
    // const {ShoppingCart} = require("@material-ui/icons")
    return(
        <div className='NavBar'>
            <div className='navBar-wraper'>
                <div className='left'>
                    <span className='language'>EN</span>
                    <div className='search'>
                        <input type='text'/>
                        <span class="material-symbols-outlined" style={{color:"gray", fontSize:16}}>
                            search
                        </span>
                    </div>
                </div>
                <div className='center'>
                    <h1>Trendy Tressures</h1>
                </div>
                <div className='right'>
                    <div className='menu-items'>
                        Register
                    </div>
                    <div className='menu-items'>
                        Sign In
                    </div>
            
                    <div className='menu-items'>
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </div>
                    <Badge badgeContent={4} color="primary">
                        {/* <ShoppingCartOutlined/> */}
                    </Badge>

                </div>
            </div>
        </div>
    )
}

export default NavBar;

