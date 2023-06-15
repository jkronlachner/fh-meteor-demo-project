import React from "react";
import "../../styles/fonts.css";
import "../../styles/base.css";
import {Header} from "../components/Header";
import {CssBaseline, CssVarsProvider, Sheet} from "@mui/joy";
import theme from "../theme/theme";

const useEnhancedEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;


export const BaseWrapper = ({children}) => {
    const [node, setNode] = React.useState(null);
    useEnhancedEffect(() => {
        setNode(document.getElementById('mode-wrapper'));
    }, []);

    return <CssBaseline>
        <CssVarsProvider theme={theme}
                         colorSchemeNode={node || null}
                         colorSchemeSelector="#mode-wrapper"
                         modeStorageKey="demo_identify-system-mode"

        >
            <Sheet id="mode-wrapper" sx={{display: "flex", flexDirection: "column"}}>
                <Header/>
                {children}
            </Sheet>
        </CssVarsProvider>
    </CssBaseline>
}