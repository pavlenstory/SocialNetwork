import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {getIsAuthSel, getLoginSel} from "../../Selectors/headerSelectors";


function HeaderContainer(props) {
    return (
        <Header {...props}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuthSel(state),
    login: getLoginSel(state),
});

export default connect(mapStateToProps, {logout})(HeaderContainer);
