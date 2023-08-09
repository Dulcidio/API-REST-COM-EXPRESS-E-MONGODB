import mongoose from "mongoose";

mongoose.connect("aqui vai a conexão que vc copiou no mongodb");

let db = mongoose.connection;

export default db;