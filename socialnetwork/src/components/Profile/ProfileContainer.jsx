import React, {Component} from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateProfile, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {
    getAuthorizedUserId,
    getIsAuth,
    getProfileInfoEditMode, getUserProfileSel,
    getUserStatusSel
} from "../../Selectors/profileSelectors";

class ProfileContainer extends Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    userProfile: getUserProfileSel(state),
    userStatus: getUserStatusSel(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: getIsAuth(state),
    profileInfoEditMode: getProfileInfoEditMode(state),
});

export default compose(withRouter, connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    updateProfile,
}))(ProfileContainer);

