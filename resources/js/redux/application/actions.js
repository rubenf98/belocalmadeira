import { types } from "./types";

export function setLightTheme() {
    return {
        type: types.SET_LIGHT_THEME, payload: "light"
    };
}

export function setDarkTheme() {
    return {
        type: types.SET_DARK_THEME, payload: "dark"
    };
}

export function handleMenu(state) {
    return {
        type: types.HANDLE_MENU, payload: state
    };
}

export function handleForm(state, data = {}) {
    return {
        type: types.HANDLE_FORM, payload: [state, data]
    };
}

export function handleTransferForm(state, data = {}) {
    return {
        type: types.HANDLE_TRANSFER_FORM, payload: [state, data]
    };
}