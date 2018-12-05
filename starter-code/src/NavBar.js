import React from "react"

function NavBar(props) {
    
 return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

            <a key="login" onClick={function(){debugger; props.handleNav("login")}} className="navbar-item"> Login</a>
            <a key="signup" onClick={function(){props.handleNav("signup")}} className="navbar-item" >Signup</a>
            <a key="message" onClick={function(){props.handleNav("message")}} className="navbar-item" > Message </a>

        </div>
    </nav>
 )
}

export default NavBar