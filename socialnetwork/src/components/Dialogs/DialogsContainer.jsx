import {addMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        ADD_MESSAGE: () => {
            dispatch(addMessageAC())
        },
        onMessageChange: (newText) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}*/

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;
