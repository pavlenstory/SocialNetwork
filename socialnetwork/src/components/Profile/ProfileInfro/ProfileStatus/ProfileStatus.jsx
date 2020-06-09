import React from "react"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.userStatus);
    }

    onStatusChange = (e) => {
        this.setState({
            userStatus: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userStatus !== this.props.userStatus)
        this.setState({
            userStatus: this.props.userStatus
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus}/>
                    </div>
                    : <div onDoubleClick={this.activateEditMode}>
                        {this.props.userStatus || "Enter status"}
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;
