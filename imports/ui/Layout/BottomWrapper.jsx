import React from "react"
import {Sheet} from "@mui/joy";

export const BottomWrapper = ({children}) => {
    return <Sheet sx={{p: 2, width: "100%"}} variant={"soft"}>
        {children}
    </Sheet>
}