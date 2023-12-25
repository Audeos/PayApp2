import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isLoggingPurpose: true,
        loginInputs: {
            phoneNumber: "",
            password: "",
        },
        signupInputs: {
            phoneNumber: "",
            fullName: "",
            password: "",
        }
    },
    reducers: {
        changePhoneNumberAction(state, action: PayloadAction<string>) {
            const phoneNumber = action.payload
            if (state.isLoggingPurpose) {
                state.loginInputs.phoneNumber = phoneNumber
            } else {
                state.signupInputs.phoneNumber = phoneNumber
            }
        },
        changePasswordAction(state, action: PayloadAction<string>) {
            const password = action.payload
            if (state.isLoggingPurpose) {
                state.loginInputs.password = password
            } else {
                state.signupInputs.password = password
            }
        },
        changeFullNameAction(state, action: PayloadAction<string>) {
            const fullName = action.payload
            state.signupInputs.fullName = fullName
        },
        changePurposeAction(state, action: PayloadAction<"signup" | "login">) {
            const newPurpose = action.payload;
            state.isLoggingPurpose = newPurpose === "login";
        }
    }
})

export default authSlice.reducer;
export const {
    changeFullNameAction,
    changePasswordAction,
    changePhoneNumberAction,
    changePurposeAction

} = authSlice.actions
