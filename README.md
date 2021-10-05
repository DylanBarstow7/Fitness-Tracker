
# Fitness-Tracker
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [Description](#Description)
- [LiveDeployment](#Live Deployment)
- [Installation](#Installation)
- [Usage](#Usage)
- [Questions / Contacts](#Contacts)
- [License](#License)

## Description

This week we were tasked with created the back end for an exercise app using mongoDB.  When this page loads you are presented with the stats from your most recent workout.  You are then able to create a new workout or to add exercises to the current workout. Once the data is input, you are able to go to the dashboard page and see charts containing the total weight and duration for the last 7 workouts.

Below is the homepage.  Stats from the last clocked workout are shown here.  There are also options to create a new workout or add a new exercise to the current one.
![alt text](https://github.com/DylanBarstow7/Fitness-Tracker/blob/master/public/img/fitnessTrackerHome.PNG)

New workout page.  You begin by choosing an exercise type from the drop down menu.
![alt text](https://github.com/DylanBarstow7/Fitness-Tracker/blob/master/public/img/FitnessTrackerNewExercise.PNG)

If you chose a new resistance workout, this is the next page you'll see.
![alt text](https://github.com/DylanBarstow7/Fitness-Tracker/blob/master/public/img/FitnessTrackerNewResistanceExercise.PNG)

If you chose a new cardio workout, then this is the next page you'll see.
![alt text](https://github.com/DylanBarstow7/Fitness-Tracker/blob/master/public/img/FitnessTrackerNewCardioExercise.PNG)

This dashboard tracks the total weight lifted in pounds as well as the workout duration in minutes.
![alt text](https://github.com/DylanBarstow7/Fitness-Tracker/blob/master/public/img/fitnessTrackerDashboard.PNG)


## Live Deployment

Live Heroku Deployment: https://stormy-plateau-54951.herokuapp.com/?id=615bed6785bf98a0f544ac18

## Installation

Fork it, clone it, from the terminal 'npm i' will install the dotenv, express, morgan, and mongodb packages. Make sure to include a .env file in the root folder with your local MongoDB client URL.

## Usage

In the terminal run 'npm start' to run the app. This will use localhost:3000/. From there you can create new workouts, add exercises to new or existing workouts, and view graphs of your recent workouts on the dashboard.

## Contact
For enquiries contact me at dcbarstow7@gmail.com.

To see other projects, please visit https://github.com/DylanBarstow7/

## License
MIT
