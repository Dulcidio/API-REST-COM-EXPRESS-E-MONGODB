import mongoose from "mongoose";

mongoose.connect("mongodb+srv://seubanco:SUASENHA@cluster0.cp6jaaz.mongodb.net/seubanco");

let db = mongoose.connection;

export default db;