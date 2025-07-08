import { Server } from "http";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");

    console.log("Connected to DB!!");
    server = app.listen(5000, () => {
      console.log("Server is listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
