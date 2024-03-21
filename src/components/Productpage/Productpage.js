import React from 'react';
import './Productpage.css'
import Eiffel from '../../assets/Eiffel.jpg'
import Header from '../Header/Header';
function Productpage() {
    return (
        <>
        <Header />
        <div>
            
            <div className='productpage-card'>
                <div className='image-container'>
                    <img src={Eiffel}></img>
                </div>
                <div className='description-container'>
                    <h3>Product 1</h3>
                    <p>lalalalalalalalalalal llulululuulalalalalala</p>
                </div>
            </div>

            <div className='productpage-card'>
                <div className='description-container'>
                    <h3>Product 1</h3>
                    <p>lalalalalalalalalalal llulululuulalalalalala</p>
                </div>
                <div className='image-container'>
                    <img src={Eiffel}></img>
                </div>
            </div>
        </div>
        </>
    );
}



export default Productpage;