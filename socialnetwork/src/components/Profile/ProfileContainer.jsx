import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )
    }
}

withRouter(ProfileContainer);

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
});

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);
