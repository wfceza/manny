<img onClick={toggleHandle} src={`../${starIcon}`} className="cardFavorite" alt="lol" />

The code above is a replacement when youre not using the props properties.

/*
        <div>
            <button onClick={addItem}>Add Things</button>
            {thingsElement}
            </div>
      */
          
          /*
          <div className="state">
            <h1>Do i feel like going out today</h1>
            <div onClick={changeMind} className="stateValue">
              <h1 className="yes">{isGoingOut ? "True" : "False"}</h1>
            </div>
          </div>
          */

    /*
 const [isGoingOut, setIsGoingOut] = React.useState(true)

 function changeMind () {
  setIsGoingOut(prevState => !prevState)
 }
 */

 /*
 const [thingsArray, setThingsArray] = React.useState(["Things 1", "Things 2"])

 function addItem () {

  setThingsArray(prevState => ([...prevState, `Things ${prevState.length + 1}`]))
 }

 const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  */

