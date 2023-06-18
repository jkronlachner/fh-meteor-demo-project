import React from 'react';
import {BaseWrapper} from "../Layout/BaseWrapper";
import {BottomWrapper} from "../Layout/BottomWrapper";
import {CenterWrapper} from "../Layout/CenterWrapper";


//SAMPLE TASKS FOR TUTORIAL
const tasks = [
    {_id: 1, text: 'First Task'},
    {_id: 2, text: 'Second Task'},
    {_id: 3, text: 'Third Task'},
];
export const App = () => {
    return <BaseWrapper>
        <CenterWrapper>
        </CenterWrapper>
        <BottomWrapper>
        </BottomWrapper>
    </BaseWrapper>
}