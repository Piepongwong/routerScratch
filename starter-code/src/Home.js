import react, {Component} from "react"
import React from "react"
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import 'bulma/css/bulma.css'

 export default props => (
    <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="password" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
)
