import express from "express";
import homeController, { getAboutPage } from "../controllers/homeController";
let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);

    return app.use("/", router);
}

module.exports = initWebRouter;