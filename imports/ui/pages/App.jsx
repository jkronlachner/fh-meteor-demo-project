import React from 'react';
import {Task} from "../components/Task";
import {BaseWrapper} from "../Layout/BaseWrapper";
import {TasksCollection} from "../../api/TasksCollection";
import {useTracker} from 'meteor/react-meteor-data';
import {CreateTaskForm} from "../components/CreateTaskForm";
import {BottomWrapper} from "../Layout/BottomWrapper";
import {CenterWrapper} from "../Layout/CenterWrapper";
import {List} from "@mui/joy";
import {StyledTask} from "../components/styled-components/StyledTask";


//SAMPLE TASKS FOR TUTORIAL
const tasks = [
    {_id: 1, text: 'First Task'},
    {_id: 2, text: 'Second Task'},
    {_id: 3, text: 'Third Task'},
];

const toggleChecked = ({_id, isChecked}) => {
    console.log(`UPDATE TASK ${_id} with value ${!isChecked}`)
    TasksCollection.update(_id, {
        $set: {
            isChecked: !isChecked
        }
    })
}

const handleDelete = ({_id}) => {
    console.log(`DELETE TASK ${_id}`)
    TasksCollection.remove(_id)
}

export const App = () => {
    //STEP 5: Fetch the data with the useTracker hook
    const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: -1}}).fetch());

    return <BaseWrapper>
        <CenterWrapper>
            {/**STEP 2: ADD THE TASK COMPONENTS HERE */}
            <List>
                {tasks.map(task => <StyledTask key={task._id} task={task} onSelect={toggleChecked} onDelete={handleDelete}/>)}
            </List>
        </CenterWrapper>
        <BottomWrapper>
            <CreateTaskForm/>
        </BottomWrapper>
    </BaseWrapper>
}