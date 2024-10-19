import { types } from "./types";

export const initialState = {
    theme: "light",
    menuVisible: false,
    formVisible: false,
    formTransferVisible: false,
    activityInitialValue: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.SET_DARK_THEME}`:
        case `${types.SET_LIGHT_THEME}`:
            return {
                ...state,
                theme: action.payload,
            };

        case `${types.HANDLE_MENU}`:
            return {
                ...state,
                menuVisible: action.payload,
            };

        case `${types.HANDLE_FORM}`:
            return {
                ...state,
                formVisible: action.payload[0],
                activityInitialValue: action.payload[1],
            };

        case `${types.HANDLE_TRANSFER_FORM}`:
            return {
                ...state,
                formTransferVisible: action.payload[0],
            };

        default:
            return state
    }
}