import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./reducer/ui/ModalSlice";

const store = configureStore({
    reducer: {
        // UI
        modal: ModalSlice,
    }
});

export default store;