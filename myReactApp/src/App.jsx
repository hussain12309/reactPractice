// import React from 'react';
 
// export default function App() {
    
//    const [isGoingOut, setIsGoingOut] = React.useState(false)


//    function changeMind(){
//     setIsGoingOut(prev =>!prev)
//    }
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//              <button 
//                 onClick={changeMind} 
//                 className="value"
//                 aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
//             >{isGoingOut ? "Yes" : "No"}</button>
//         </main>
//     )
// }



///complex state arrays
// import React from 'react'

// export default function App() {
//   const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

//   const allFavoriteThings = [
//     "💦🌹", "😺", "💡🫖", "🔥🧤", 
//     "🟤🎁", "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"
//   ]

//   const thingsElements = myFavoriteThings.map(thing => (
//     <p key={thing}>{thing}</p>
//   ))

//   // function addFavoriteThing() {
//   //   // add a random new item not already in myFavoriteThings
//   //   const remainingThings = allFavoriteThings.filter(
//   //     thing => !myFavoriteThings.includes(thing)
//   //   )

//   //   if (remainingThings.length === 0) return // nothing to add

//   //   const randomThing = remainingThings[Math.floor(Math.random() * remainingThings.length)]

//   //   setMyFavoriteThings(prev => [...prev, randomThing])
//   // }
//   function addFavoriteThing(){
//     setMyFavoriteThings(prevFavThings=>[...prevFavThings, allFavoriteThings[prevFavThings.length]])
//   }

//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">
//         {thingsElements}
//       </section>
//     </main>
//   )
// }




///complex state objects
import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img src={avatar} className="avatar" alt="User profile" />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        className="favorite-button"
                    >
                        <img
                            src={contact.isFavorite ? starFilled : starEmpty}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}

