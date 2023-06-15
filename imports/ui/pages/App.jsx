import React from 'react';
import {BaseWrapper} from "../Layout/BaseWrapper";
import {TasksCollection} from "../../db/TasksCollection";
import {useTracker} from 'meteor/react-meteor-data';
import {CreateTaskForm} from "../components/CreateTaskForm";
import {BottomWrapper} from "../Layout/BottomWrapper";
import {CenterWrapper} from "../Layout/CenterWrapper";
import {CircularProgress, List, Stack} from "@mui/joy";
import {StyledTask} from "../components/styled-components/StyledTask";


//SAMPLE TASKS FOR TUTORIAL
const tasks = [
    {_id: 1, text: 'First Task'},
    {_id: 2, text: 'Second Task'},
    {_id: 3, text: 'Third Task'},
];

export const App = () => {
    const {tasks, isLoading} = useTracker(() => {
        const handler = Meteor.subscribe('tasks');

        if (!handler.ready()) {
            return { tasks: [], isLoading: true };
        }

        const tasks = TasksCollection.find({},
            {
                sort: { createdAt: -1 },
            }
        ).fetch();

        return { tasks: tasks, isLoading: false };
    })
    console.log(isLoading, tasks)

    const handleDelete = ({_id}) => {
        Meteor.call("tasks.remove", _id);
    }

    const handleSelect = ({_id, isChecked}) => {
        Meteor.call("tasks.setIsChecked", _id, !isChecked)
    }

    return <BaseWrapper>
        <CenterWrapper>
            {/**STEP 2: ADD THE TASK COMPONENTS HERE */}
            {isLoading && <Stack height={"100%"} width={"100%"} alignItems={"center"} justifyContent={"center"}><CircularProgress/></Stack>}
            <List>
                {tasks.map(task => <StyledTask key={task._id} task={task} onSelect={handleSelect} onDelete={handleDelete}/>)}
            </List>
        </CenterWrapper>
        <BottomWrapper>
            <CreateTaskForm/>
        </BottomWrapper>
    </BaseWrapper>
}