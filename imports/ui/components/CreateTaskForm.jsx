import React from "react";
import {Button, Input, Stack} from "@mui/joy";

export const CreateTaskForm = () => {

    function handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = event.target.text.value;

        Meteor.call("tasks.insert", text);

        // Clear form
        event.target.text.value = "";
    }

    return <form style={{width: "100%"}} onSubmit={(event) => handleSubmit(event)}>
        <Stack direction={"row"} width={"100%"} spacing={1}>
            <Input name={"text"} fullWidth required label={"New Task"} placeholder={"What do you wanna do?"}/>
            <Button type={"submit"}>Add</Button>
        </Stack>
    </form>

}