import React from 'react';
import "./styles/generator.css";
import { useState } from 'react';

function RandomColorGenerator() {

    const alphabets = "abcdef";
    const nums = "0123456789";
    const[hex, setHex] = useState("#ffffff");

    function generate() {
        setHex("#");
        for(let i = 0; i <= 2; i++) {
            setHex((prev) => {
                return prev += alphabets[Math.floor(Math.random() * alphabets.length)] + nums[Math.floor(Math.random() * nums.length)];
            });
        }
    }

    return(
        <div className='generator'>
            <div className='generator__color' style={{backgroundColor: hex}}>
                <div className='generator__color__hex'>
                    <h1>{hex}</h1>
                </div>
            </div>
            <div className='generator__btn'>
                <button type='button' onClick={generate}>
                    Generate
                </button>
            </div>
        </div>
    );
}

export default RandomColorGenerator;

