import react, {Component} from "react"
import React from "react"
import Home from "./Home"
import SignUp from "./SignUp"
import 'bulma/css/bulma.css'
import NavBar from "./NavBar";
import Message from "./Message"

class App extends Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this)
        this.state = {page: "signup"}
    }

    handleNavigation(page) {
        debugger
        this.setState({page: page})
    }

    goToMessage = ()=> {
        this.setState({page: "message"})
    }

    render() {

        var pageComponents = {
            login: <Home />, //Login component doesn't exist yet
            signup: <SignUp />,
            message: <Message> Hi everybody!</Message>
        }
        debugger
        return(
            <div>
                <a onClick={this.goToMessage}>Go To Message</a>
                <NavBar handleNav={this.handleNavigation} />
                {pageComponents[this.state.page]}
            </div>
        )
    }
}

export default App