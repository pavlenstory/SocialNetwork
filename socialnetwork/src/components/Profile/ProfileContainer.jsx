import React from "react"
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
