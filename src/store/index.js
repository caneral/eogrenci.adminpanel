import { configureStore } from "@reduxjs/toolkit";
import departmentSlice from "../features/departmentSlice";
import sidebarSlice from "../features/sidebarSlice";

const store = configureStore({
    reducer:{
        sidebar: sidebarSlice,
        department: departmentSlice
    }
});

export default store;