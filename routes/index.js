const userRoute = require("./user");
const statsRoute = require("./stats");

const router = require("express").Router();


module.exports = (app) => {
    app.use("/api", userRoute);
    app.use("/api", statsRoute);
};