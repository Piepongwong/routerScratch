import React, {Component} from "react"
import 'bulma/css/bulma.css'

export default props => (
    <article className="message is-info">
        <div className="message-header">
            <p>{props.title}</p>
            <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
           {props.children}
        </div>
    </article>
)