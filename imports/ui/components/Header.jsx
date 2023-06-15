import React from 'react';
import {Box, Button, Sheet, Stack, Typography} from "@mui/joy";
import {useColorScheme} from '@mui/joy/styles';
import {DarkModeTwoTone, LightModeTwoTone} from "@mui/icons-material";


export const Header = () => {
    const {mode, setMode} = useColorScheme();
    return <Sheet sx={{p: 2}} variant={"soft"} width={"100%"}>
        <Stack justifyContent={"space-between"} width={"100%"} alignItems={"center"} direction={"row"} spacing={2}>
            <img alt={"Icon"} src={"/assets/images/meteor-icon.svg"} height={60}/>
            <Box sx={{textAlign: "center"}}>
                <Typography level={"h4"}>Simple TODO App</Typography>
                <Typography color={"primary"} level={"body1"}>Meteor.js Tutorial</Typography>
            </Box>
            <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                    variant={"outlined"}>
                {mode === "light" ? <DarkModeTwoTone/> : <LightModeTwoTone/>}
            </Button>
        </Stack>
    </Sheet>
}