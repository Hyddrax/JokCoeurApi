const userRoute = require("./user");

const router = require("express").Router();


module.exports = (app) => {
    app.use("/api", userRoute);
};