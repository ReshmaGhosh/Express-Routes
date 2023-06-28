// user controller here

import { Request, Response } from "express";

export const createUsers = async (request: Request, response: Response) => {
  response.json({ message: "create users" });
};

export const deleteUser = async (request: Request, response: Response) => {
  response.json({ message: "delete user" });
};
