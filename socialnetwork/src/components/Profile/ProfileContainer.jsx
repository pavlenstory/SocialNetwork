import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    authorizedUserId: state.auth.id,
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    isAuth: state.auth.isAuth,
});

export default compose(withRouter, connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}))(ProfileContainer);

