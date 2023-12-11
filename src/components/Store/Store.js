

import { configureStore } from "@reduxjs/toolkit";
import ComposeVisiblity from "./ComposeVisible";



const store=configureStore({
    reducer:{isVisible:ComposeVisiblity}
})

export default store;