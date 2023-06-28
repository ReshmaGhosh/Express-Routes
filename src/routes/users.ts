// product routes here

import { Router, Request, Response } from "express";
import { createUsers, deleteUser } from "../controllers/users";

const router = Router();

router.post("/", createUsers);

router.delete("/", deleteUser);

export default router;
