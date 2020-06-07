import {connect} from "react-redux";
import {getUnFollow, getFollow, getUsers} from "../../Redux/usersReducer";
import * as React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    setUnFollow={this.props.setUnFollow}
                    setFollow={this.props.setFollow}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    onPageChanged={this.onPageChanged}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (usersId) => {
            dispatch(unFollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {getUnFollow, getFollow, getUsers})(UsersContainer);


