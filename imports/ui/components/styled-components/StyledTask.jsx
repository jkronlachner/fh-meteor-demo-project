import React from "react"
import {Checkbox, ListDivider, ListItem, ListItemContent, ListItemButton, ListItemDecorator, Button} from "@mui/joy";
import {DeleteForeverTwoTone} from "@mui/icons-material";

export const StyledTask = ({task, onSelect, onDelete}) => {
    return <>
        <ListItem>
            <ListItemButton>
                <ListItemDecorator>
                    <Checkbox checked={task.isChecked ?? false} overlay
                              onChange={() => onSelect(task)}></Checkbox></ListItemDecorator>
                <ListItemContent>
                    {task.text}
                </ListItemContent>


            </ListItemButton>
            <Button onClick={(e) => {
                e.stopPropagation()
                onDelete(task)
            }} variant={"plain"}><DeleteForeverTwoTone/></Button>
        </ListItem>
        <ListDivider inset={"startContent"}/>
    </>
}