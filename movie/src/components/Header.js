import React from 'react';
import '../styles.css';

export default function Header(){
    return(
    <div className='header'>
        <img src="logo" src='logo.png' alt="movie" />
        <h2 className='app-subtitle'>it's time for popcon! find your next movie here</h2>
    </div>
    );
}