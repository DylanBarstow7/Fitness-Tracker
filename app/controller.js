import { ObjectId } from "mongodb";
import client from "./loader.js";
import workoutModel from "./model.js"

const workoutController = client.db("workout_db").collection("workouts");

export default {
    index() {
      const workouts = workoutController.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      },]).toArray()
      return workouts;
    },
    // Async update method that includes ID & updated exercise
    async update(id, newExercise) {
      // Finding desired workout by searching the ID
      const workoutById = await workoutController.findOne({_id:ObjectId(id)});
      const updatedWorkout = workoutModel.createExercise(workoutById,newExercise);
      return workoutController.replaceOne({_id:ObjectId(id)},updatedWorkout);
    },
    create() {
      const date = new Date();
      return workoutController.insertOne(
        {day:date, exercises:[]}
      )
    },
    show(){
      const workouts = workoutController
      .aggregate([
        // Orders the elements from most recent IDs to oldest IDs
        {$sort:{_id:-1}},
        // Limits output to 10 most recent entries
        {$limit:10},
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
            totalWeight: { $sum: "$exercises.weight" }
          }
        },
        // Sort the most recent IDs from oldest to newest
        {$sort:{_id:1}},
      ]).toArray();
      return workouts;
  
    }
  };
  