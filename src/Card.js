import React from 'react'


export  default function Card(props) {
    let badgeText
    if (props.openSports === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
   
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img}  className="card-image" />
            <div className="card-starts">
                <img className="star" src="./star.PNG" alt="star"  />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewcount}) .</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} / person</span></p>

        </div>
    )
}