import{Router} from 'express';
import {UserControlller} from "./controllers/UserController";

const router = Router();
const userController = new UserControlller();

router.post("/users",userController.create);

export {router};