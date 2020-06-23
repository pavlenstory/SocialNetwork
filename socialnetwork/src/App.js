import './App.css'
import React, {Component} from "react"
import NavBar from "./components/NavBar/NavBar"
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import GlobalPreloader from "./components/common/GlobalPreloader/GlobalPreloader";
import store from "./Redux/ReduxStore";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert(reason.reason.message)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }


    render() {
        if (!this.props.initialized) {
            return <GlobalPreloader/>
        }
        return (
            <div className={"App"}>
                <HeaderContainer/>
                <NavBar/>
                <div className={"AppCentralContent"}>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                        <Route path="/profile/:userId?" component={ProfileContainer}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/news" component={News}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/login" component={Login}/>
                        <Route path="*" render={()=><div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

const AppContainer = compose(
    withRouter,
    (connect(mapStateToProps, {initializeApp})))(App);

const AppForWrappers = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default AppForWrappers