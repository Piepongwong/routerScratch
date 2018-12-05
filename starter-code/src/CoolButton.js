import React from "react"
import 'bulma/css/bulma.css'

function CoolButton(props) {

    var classNames = Object.keys(props).filter((theProp)=> typeof props[theProp] === "boolean")
    var classNamesKebab = classNames.map((camel)=> camel.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase() }))
    var allClassNames = `button ${classNamesKebab.join(" ")} ${props.className}`
    
    return (
        <button className={allClassNames}>{props.children}</button>
    )
}

export default CoolButton