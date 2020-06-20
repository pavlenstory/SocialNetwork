import {addMessage} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getMessagesSel, getNewMessageTextSel, getUsersSel} from "../../Selectors/dialogsSelectors";

let mapStateToProps = (state) => {
    return {
        users: getUsersSel(state),
        messages: getMessagesSel(state),
        newMessageText: getNewMessageTextSel(state),
    }
}

export default compose(connect(mapStateToProps, {addMessage}), withAuthRedirect)(Dialogs);

