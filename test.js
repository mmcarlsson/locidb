"use strict";

/* This file is for testing the module locidb. Run it in the terminal with "node ./test" */

const LociDB = require("./index"); // Import the module.
const db = new LociDB(); // Create an instance of lociDB and create folder in users appData folder.
// const db = new LociDB("/path/to/destination", "mycooldb")  // You can also decide your self where to store lociDB database, table files and what name it should have.
// const db = new LociDB(undefined, "mycooldb")               // Create a lociDB database folder at default location but change the name.
// const db = new LociDB(app.getPath("userData"), "mycooldb") // For electron app developer. A lociDB database folder is created per auto inside you app config folder which is in users default appData folder.

// This is three example objects
let user = {
  name: "Mikael",
  age: 27,
  city: "Bohus",
  country: "Sweden"
};

let user2 = {
  name: "Kalle",
  age: 27,
  city: "Nol",
  country: "Norway"
};

let settings = {
  fontSize: 13,
  color: "#000",
  active: false
};

console.log(db.listTables()); // First list tables to see if there exists any already.

db.set("users", user);
db.set("settings", settings); // This will overwrite any data in the table and insert the value instead.

db.insert("users", user2); // Insert the object to the table at the end.

console.log(db.countRows("users")); // Count how many rows there is in a table.

console.log(db.get("users")); // Get all rows in the table as an array of objects and print it.
console.log(db.get("settings"));

console.log(db.getRows("users", "name", "Mikael")); // Get all rows in a table matching a key and a value as an array of objects.

console.log(db.dropRows("users", "name", "Mikael")); // Drop/delete specific rows in a table. Returns a number of total rows deleted.
console.log(db.dropTable("settings")); // Drop/delete a specific table. Returns true if a delete was made of false if not.
// db.dropAll() // Drop/deletes all tables. Only use if you know what you doing.
