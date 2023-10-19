import React from 'react'


export  default function Card(props) {
    return (
        <div className="card">
            <img src={props.img}  className="card-image" />
            <div className="card-starts">
                <img className="star" src="./star.PNG" alt="star"  />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewcount}) .</span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} / person</span></p>

        </div>
    )
}