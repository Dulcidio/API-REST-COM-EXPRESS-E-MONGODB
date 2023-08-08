import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:vrdv4569@cluster0.cp6jaaz.mongodb.net/alura");

let db = mongoose.connection;

export default db;