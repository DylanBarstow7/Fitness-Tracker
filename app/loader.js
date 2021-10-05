// Generates a reusable Mongo Client for the application
import {MongoClient} from "mongodb";
import config from "./config.js";

const client = new MongoClient(config.db);

client
  .connect()
  .then(() =>{
    console.info("MongoDB Client is running");
  })
  .catch((err)=>{
    console.error("Error starting MongoDB Client", err.message);

    // Exit process if failure
    process.exit(1);
  });

process.on("SIGINT",()=>{
  client.close().then(()=>{
    console.info("MongoDB Client disconnected");
    process.exit(0);
  });
});

  export default client;