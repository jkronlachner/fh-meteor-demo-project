import {Mongo} from "meteor/mongo";

//STEP 3: Create a new Mongo collection
export const TasksCollection = new Mongo.Collection("tasks");