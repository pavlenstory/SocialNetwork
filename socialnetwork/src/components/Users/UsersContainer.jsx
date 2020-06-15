import {connect} from "react-redux";
import {getUnFollow, getFollow, requestUsers} from "../../Redux/usersReducer";
import * as React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers,
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (p) => {
        const {pageSize} = this.props;
        this.props.getUsers(p, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    getUnFollow={this.props.getUnFollow}
                    getFollow={this.props.getFollow}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    onPageChanged={this.onPageChanged}
                    portionSize={this.props.portionSize}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: getIsFetching(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
    }
}

export default compose(connect(mapStateToProps, {getUnFollow, getFollow, getUsers: requestUsers}))(UsersContainer);


