import React from 'react'
import CardElement from './CardElement.jsx'

function Jumbo() {
  return (
    <main className="jumbotronContainer">
    <div className="ContentWrapper">
        <div className="LeftContent">
        <div className="ImgJumboContainer">
            <img  className="JumbotronImg shadow-sm" src="https://picsum.photos/300/300"alt="jumbotron"/>
        </div>
        <div><q className="ImgFooter">This is a random picture footer</q></div>
        </div>

        <div className="RightContent">
            <div className="JumboInfo">
                    <h1 className="JumboTitle">Welcome to this page</h1>
                    <hr />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum."</p>
            </div>
            <div className="randomCards">
                <CardElement />
                <CardElement />
                <CardElement />
                <CardElement />

            </div>
        </div>


    </div>

    </main>
  )
}

export default Jumbo