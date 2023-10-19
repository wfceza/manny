import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import "./style.css"

import data from "./data"


export default function App() {

    const cards = data.map(item => {
        return (
            <Card
            key={item.id}
            img= {item.coverImg}
            rating={item.stats.rating}
            reviewcount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSports={item.openSports}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <Hero />
            {cards}
        </div>

    )
}