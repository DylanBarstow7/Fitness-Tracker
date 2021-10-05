import client from "./loader.js";

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
    // async update method which includes ID & updated exercise
    async update(id, newExercise) {
      // Find the desired workout by finding through the ID
      const workoutById = await workoutController.findOne({_id:ObjectId(id)});
      const updatedWorkout = workoutModel.createExercise(workoutById,newExercise);
      return workoutController.replaceOne({_id:ObjectId(id)},updatedWorkout);
    },
};

//   create() {
//     return notesCollection.insertOne(newNote);
//   },
//   show() {
//     return notesCollection.findOne(ObjectId(id));
//   },