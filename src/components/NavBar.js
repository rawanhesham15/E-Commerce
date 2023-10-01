import React from 'react'
import './NavBarStyle.css'
import {Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';

function NavBar(){
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
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar;

