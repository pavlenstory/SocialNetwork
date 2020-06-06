import './App.css'
import React from "react"
import NavBar from "./components/NavBar/NavBar"
import {Route} from "react-router-dom"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {
    return (
        <div className={"App"}>
            <HeaderContainer/>
            <NavBar/>
            <div className={"AppCentralContent"}>
                <Route path="/profile/:userId?" component={ProfileContainer} />
                <Route path="/dialogs" component={DialogsContainer}/>
                <Route path="/users" component={UsersContainer}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}

export default App;
