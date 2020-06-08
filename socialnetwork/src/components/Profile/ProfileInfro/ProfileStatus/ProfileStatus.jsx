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

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus}/>
                    </div>
                    : <div onDoubleClick={this.activateEditMode}>
                        {this.props.userStatus}
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;
