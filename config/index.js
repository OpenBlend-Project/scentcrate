const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  app.set("trust proxy", 1)

  // The CORS origin is set to "*" to make the API public
  app.use(
    cors({
      origin: "*"
    })
  )

  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
}