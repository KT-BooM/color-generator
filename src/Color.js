import React, { useState, useEffect } from 'react'

const Color = ({ idx, rgb, weight, hex }) => {
    const [copy, setCopy] = useState(false);
    const bcg = rgb.join(',');
    hex = '#'+hex;
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopy(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [copy])
    return (
        <div className="card" 
            onClick={() => {
                setCopy(true);
                navigator.clipboard.writeText(hex);
                }}>
            <div className="card-color" style={{backgroundColor:`rgb(${bcg})`}} >
                {copy && <p className={`${idx > 10 ? 'copy light': 'copy'}`}>copied to clipboard</p>}
            </div>
            <section>
                <p>{hex}</p>
                <p>{weight}%</p>
            </section>
            
        </div>
    )
}

export default Color
