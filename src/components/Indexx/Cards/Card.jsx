import React from 'react';


const Card = ({name, comics, image}) => {
    return (
        <div className="card">
            <a href="#">
                <div className="front">
                    <img src={image} alt={name}/>
                </div>
                <div className="back">
                    <div className="details">
                        <h2>{name}<br /><span>{comics}</span></h2>
                    </div>
                </div>
            </a>
        </div>

    )
}

export default Card;
