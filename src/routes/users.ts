// product routes here

import { Router } from "express";
import { createUsers, createUsersById, deleteUser } from "../controllers/users";

const router = Router();

router.post("/", createUsers);

router.delete("/", deleteUser);

router.post("/:id", createUsersById);

export default router;
