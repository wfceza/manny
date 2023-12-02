import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star"
import style from "./style.css"


function App() {
  
  
 const [contact, setContact] = React.useState({
  firstName: "Ceza",
  lastName: "Ceaze",
  phone: "+2349165948566",
  email: "wfceza@gmail.com",
  isFavorite: true

 })

function toggleHandle () {
  setContact(prevState => {
    return {
      ...prevState,
      isFavorite: !prevState.isFavorite
    }
  })
}
    return(
      <div>
        <div className="cardContainer">
          <img  src="./ceza.PNG" alt="lmao" />

          <div className="cardInfo">
           <Star isFilled={contact.isFavorite}  handleClick={toggleHandle}/>
            <h2 className="cardName">{contact.firstName} {contact.lastName}</h2>
            <p className="cardNumber">{contact.phone}</p>
            <p className="cardContact">{contact.email}</p>
          </div>
        </div>

      </div>
      
    )
}

ReactDOM.render(<App />, document.getElementById("root"))