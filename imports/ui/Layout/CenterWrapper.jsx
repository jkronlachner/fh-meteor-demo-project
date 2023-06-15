import React from "react"
import {Sheet} from "@mui/joy";

export const CenterWrapper = ({children}) => {
    return <Sheet sx={{flex: 1, overflow: "auto"}} variant={"plain"}>
        {children}
    </Sheet>
}