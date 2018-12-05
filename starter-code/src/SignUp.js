import react, {Component} from "react"
import React from "react"
import NavBar from "./NavBar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import 'bulma/css/bulma.css'

function SignUp(props) {

    return(
        <div>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" />
            <CoolButton  isDanger className="is-rounded my-class">Submit</CoolButton>
        </div>
    )
}

export default SignUp