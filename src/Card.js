import React from 'react'


export  default function Card(props) {
    let badgeText
    if (props.item.openSports === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
   
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverImg}  className="card-image" />
            <div className="card-starts">
                <img className="star" src="./star.PNG" alt="star"  />
                <span>{props.item.stats.reviewcount}</span>
                <span className="gray">({props.item.reviewcount}) .</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price} / person</span></p>

        </div>
    )
}