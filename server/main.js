import { Meteor } from 'meteor/meteor';
import {TasksCollection} from "../imports/db/TasksCollection";
import '/imports/api/methods/taskMethods';
import '/imports/api/publications/tasksPublications';


const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(async () => {
  //STEP 4: SEED DATE ON STARTUP
  //if the tasks collection is empty, create some data
  if(TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
});
