import './App.css'
import React from "react"
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Profile from "./components/Profile/Profile"
import {Route} from "react-router-dom"
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {addPost, updateNewPostText} from "./Redux/store";

const App = (props) => {
    return (
        <div className={"App"}>
            <Header/>
            <NavBar/>
            <div className={"AppCentralContent"}>
                <Route path="/profile" render={() => <Profile state={props.state} dispatch={props.dispatch}/>} />
                <Route path="/dialogs" render={() => <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}

export default App;
